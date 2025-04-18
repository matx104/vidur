import { inArray } from 'drizzle-orm';
import { postingApplicantsTable, type Candidate, candidatesTable } from '../db/schema';
import authenticateAdminRequest from '../utils/admin';
import { applicationsLookupSchema } from '~~/shared/schemas/application';

export default defineEventHandler(async (event) => {
  await authenticateAdminRequest(event);

  const query = await getValidatedQuery(event, (q: any) => {
    const postingIdsCSV = q.postingIds;
    const postingIds: string[] = [];
    if (postingIdsCSV && typeof postingIdsCSV === 'string') {
      postingIds.push(...postingIdsCSV.split(',').map((p) => p.trim()));
    }
    return applicationsLookupSchema.parse({ postingIds });
  });

  if (query.postingIds.length == 0) {
    if (IS_DEV) {
      console.log('applications lookup', 'no posting ids found in query');
    }
    return {
      applications: [],
      applicants: {},
    };
  }

  const db = await useDatabase();

  const applicationRecords = await db
    .select()
    .from(postingApplicantsTable)
    .where(inArray(postingApplicantsTable.postingId, query.postingIds));

  const applications: Record<string, (typeof applicationRecords)[0][]> = {};
  applicationRecords.forEach((r) => {
    if (!applications[r.postingId]) {
      applications[r.postingId] = [];
    }
    applications[r.postingId]?.push(r);
  });

  const applicantIdsMayContainDuplicate = applicationRecords.map((a) => a.candidateId);
  const applicantIds: string[] = [];

  new Set(applicantIdsMayContainDuplicate).forEach((e) => e && applicantIds.push(e));

  const applicantRecords =
    applicantIds.length > 0
      ? await db
          .select({ candidate: candidatesTable })
          .from(candidatesTable)
          .where(inArray(candidatesTable.id, applicantIds))
      : [];

  const applicants: Record<string, { candidate: Candidate }> = {};

  applicantRecords.forEach((a) => {
    applicants[a.candidate.id] = {
      candidate: a.candidate,
    };
  });

  // Final validation: all candidates should be present;
  applicationRecords.forEach((a) => {
    if (!applicants[a.candidateId]) {
      console.error('candidate id', a.candidateId, 'is missing from database response');
      throw createError({
        statusCode: 500,
      });
    }
  });

  // Fill up empty array for postings with no applicants.
  query.postingIds.forEach((pid) => {
    if (!Array.isArray(applications[pid])) {
      applications[pid] = [];
    }
  });

  return {
    applications,
    applicants,
  };
});
