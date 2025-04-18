# Changelog

## v1.1.0

[compare changes](https://github.com/profilecity/vidur/compare/v1.0.0...v1.1.0)

### 🚀 Enhancements

- **api:** Review tags ([#159](https://github.com/profilecity/vidur/pull/159))
- **db:** Extend applications table with review tag ([#156](https://github.com/profilecity/vidur/pull/156))
- **career-page:** Show total postings ([#172](https://github.com/profilecity/vidur/pull/172))
- **postings:** Ability to expire postings ([#184](https://github.com/profilecity/vidur/pull/184))
- **posting:** Date-picker for expiry ([d6c1564](https://github.com/profilecity/vidur/commit/d6c1564))

### 🩹 Fixes

- **ux:** Open links in new tab ([#167](https://github.com/profilecity/vidur/pull/167))
- **applicants:** Disable resume button when unavailable ([#178](https://github.com/profilecity/vidur/pull/178))
- **runtime:** Inject correct version ([#171](https://github.com/profilecity/vidur/pull/171))
- **ui:** Allow disabling DatePicker and Switch ([ace1777](https://github.com/profilecity/vidur/commit/ace1777))
- **posting:** Disable editing for expired postings ([b8c698a](https://github.com/profilecity/vidur/commit/b8c698a))
- **ui:** Move to tiptap for better editor ([#187](https://github.com/profilecity/vidur/pull/187))
- **ui:** Job description label ([78e3945](https://github.com/profilecity/vidur/commit/78e3945))
- **apply:** Defer applying till status received ([0f64cdb](https://github.com/profilecity/vidur/commit/0f64cdb))
- **apply:** Stop user from applying to expired jobs ([d11845c](https://github.com/profilecity/vidur/commit/d11845c))
- **apply:** Login state issue ([07dbe80](https://github.com/profilecity/vidur/commit/07dbe80))

### 📖 Documentation

- **readme:** Update for v1 ([#145](https://github.com/profilecity/vidur/pull/145))

### 🏡 Chore

- **infra:** Update `.dockerignore` ([#168](https://github.com/profilecity/vidur/pull/168))
- **deps-dev:** Bump @types/pg from 8.11.8 to 8.11.10 ([#166](https://github.com/profilecity/vidur/pull/166))
- **deps-dev:** Bump husky from 9.1.5 to 9.1.6 ([#165](https://github.com/profilecity/vidur/pull/165))
- **deps-dev:** Bump changelogen from 0.5.5 to 0.5.7 ([#181](https://github.com/profilecity/vidur/pull/181))

### ❤️ Contributors

- Amandesai01 <amandesai01@gmail.com>
- Aman Desai ([@amandesai01](http://github.com/amandesai01))
- Karthik8239 ([@karthik8239](http://github.com/karthik8239))
- Suryansh Soni ([@suryanshsoni120](http://github.com/suryanshsoni120))
- Shivam Sharma ([@shivam-sharma7](http://github.com/shivam-sharma7))
- Dev Shailesh Shah ([@devshahofficial](http://github.com/devshahofficial))

## v1.0.0

[compare changes](https://github.com/profilecity/vidur/compare/v0.4.0...v1.0.0)

### 🚀 Enhancements

- **db:** Preferred review tags table ([#144](https://github.com/profilecity/vidur/pull/144))
- **seeds:** Insert default tags into review tags table ([#153](https://github.com/profilecity/vidur/pull/153))
- **ui:** Slot of sublabel text ([4a19028](https://github.com/profilecity/vidur/commit/4a19028))

### 🩹 Fixes

- **typo:** Description ([#143](https://github.com/profilecity/vidur/pull/143))
- **ui:** Timezone display as per UTC ([#155](https://github.com/profilecity/vidur/pull/155))
- **storage:** ⚠️  Data now stored in var for longer lifespan ([d491b71](https://github.com/profilecity/vidur/commit/d491b71))

### 🏡 Chore

- Update Vidur link ([#149](https://github.com/profilecity/vidur/pull/149))
- **settings:** Clarify link limit ([592b1fe](https://github.com/profilecity/vidur/commit/592b1fe))

#### ⚠️ Breaking Changes

- **storage:** ⚠️  Data now stored in var for longer lifespan ([d491b71](https://github.com/profilecity/vidur/commit/d491b71))

### ❤️ Contributors

- Amandesai01 <amandesai01@gmail.com>
- HemalDesai ([@HemalDesai](http://github.com/HemalDesai))
- Shivam Sharma ([@shivam-sharma7](http://github.com/shivam-sharma7))

## v0.4.0

[compare changes](https://github.com/profilecity/vidur/compare/v0.3.0...v0.4.0)

### 🩹 Fixes

- **auth:** Fix no session bug ([8dac2bb](https://github.com/profilecity/vidur/commit/8dac2bb))
- **applicant:** Fix auth state to auto apply ([6331318](https://github.com/profilecity/vidur/commit/6331318))
- **auth:** ⚠️  Refine auth / delte cookies when auth fails ([5e0fb0d](https://github.com/profilecity/vidur/commit/5e0fb0d))
- Career site settings endpoint update ([2e9c195](https://github.com/profilecity/vidur/commit/2e9c195))

### 🏡 Chore

- **dev:** Remove unnecessary error warning ([fbfba03](https://github.com/profilecity/vidur/commit/fbfba03))
- **restructure:** Bring onboarding page to top level ([925e7fc](https://github.com/profilecity/vidur/commit/925e7fc))
- **fix:** Add auth to onboarding page ([cb7ac70](https://github.com/profilecity/vidur/commit/cb7ac70))
- **ci:** Install deps from lockfile ([#127](https://github.com/profilecity/vidur/pull/127))
- **deps-dev:** Bump typescript from 5.5.4 to 5.6.2 ([#128](https://github.com/profilecity/vidur/pull/128))

#### ⚠️ Breaking Changes

- **auth:** ⚠️  Refine auth / delte cookies when auth fails ([5e0fb0d](https://github.com/profilecity/vidur/commit/5e0fb0d))

### ❤️ Contributors

- Shivam Sharma ([@shivam-sharma7](http://github.com/shivam-sharma7))
- Amandesai01 <amandesai01@gmail.com>

## v0.3.0

[compare changes](https://github.com/profilecity/vidur/compare/v0.2.0...v0.3.0)

### 🩹 Fixes

- **onboarding:** ⚠️  Add auth ([6f61c19](https://github.com/profilecity/vidur/commit/6f61c19))
- **auth:** ⚠️  Silently ignore auth to support unauthenticated pages ([a9d3690](https://github.com/profilecity/vidur/commit/a9d3690))

### 🏡 Chore

- **bin:** Script to publish docker images correctly ([8ec097d](https://github.com/profilecity/vidur/commit/8ec097d))
- **format:** Ignore changelog ([15a83fa](https://github.com/profilecity/vidur/commit/15a83fa))

#### ⚠️ Breaking Changes

- **onboarding:** ⚠️  Add auth ([6f61c19](https://github.com/profilecity/vidur/commit/6f61c19))
- **auth:** ⚠️  Silently ignore auth to support unauthenticated pages ([a9d3690](https://github.com/profilecity/vidur/commit/a9d3690))

### ❤️ Contributors

- Amandesai01 <amandesai01@gmail.com>

## v0.2.0

[compare changes](https://github.com/profilecity/vidur/compare/v0.1.0...v0.2.0)

### 🚀 Enhancements

- **infra:** ⚠️ Remove docker prod file from compose ([d240025](https://github.com/profilecity/vidur/commit/d240025))
- **infra:** ⚠️ Revamp docker file ([da1d815](https://github.com/profilecity/vidur/commit/da1d815))
- New crud abstraction ([836ff06](https://github.com/profilecity/vidur/commit/836ff06))
- **ci:** Code style and type check in `Node.js CI` environment ([#120](https://github.com/profilecity/vidur/pull/120))
- **settings:** ⚠️ Settings now config + merged with public settings ([6a23af9](https://github.com/profilecity/vidur/commit/6a23af9))

### 🔥 Performance

- Stop from saving settings on every click ([4e02d11](https://github.com/profilecity/vidur/commit/4e02d11))
- **posting:** Serve postings from cache ([#124](https://github.com/profilecity/vidur/pull/124))

### 🩹 Fixes

- Typings ([802bfcb](https://github.com/profilecity/vidur/commit/802bfcb))
- **api:** ⚠️ Hooks now returned ordered based on created TS ([e4cd46e](https://github.com/profilecity/vidur/commit/e4cd46e))
- **api:** ⚠️ Hooks update no longer returns new hook ([4368797](https://github.com/profilecity/vidur/commit/4368797))
- First fetch updated ([2c342f5](https://github.com/profilecity/vidur/commit/2c342f5))
- Db and schema path for migration ([#123](https://github.com/profilecity/vidur/pull/123))
- **rendering:** ⚠️ Nested admin pages now render clientside ([52ec789](https://github.com/profilecity/vidur/commit/52ec789))
- ⚠️ Remove unused params ([9d70463](https://github.com/profilecity/vidur/commit/9d70463))

### 📖 Documentation

- Remove dev warning ([5c1fb92](https://github.com/profilecity/vidur/commit/5c1fb92))

### 🏡 Chore

- Remove deprecated assets ([f883b82](https://github.com/profilecity/vidur/commit/f883b82))
- **format:** ⚠️ Enhance code style with prettier and husky ([#108](https://github.com/profilecity/vidur/pull/108))
- **format:** Format as per new rules ([bab0860](https://github.com/profilecity/vidur/commit/bab0860))
- **deps-dev:** Bump @types/pg from 8.11.6 to 8.11.8 ([#114](https://github.com/profilecity/vidur/pull/114))
- **format:** Restructure for nuxt4 ([1458041](https://github.com/profilecity/vidur/commit/1458041))
- **refactor:** Simplify hooks using new abstraction ([9514ede](https://github.com/profilecity/vidur/commit/9514ede))
- Prevent on button clicks ([8cdc5b4](https://github.com/profilecity/vidur/commit/8cdc5b4))
- **refactor:** Members use repository ([df5c7fc](https://github.com/profilecity/vidur/commit/df5c7fc))
- **refactor:** Update dataflow for postings ([662d0b2](https://github.com/profilecity/vidur/commit/662d0b2))
- **infra:** Update `.dockerignore` ([#121](https://github.com/profilecity/vidur/pull/121))
- **api:** ⚠️ Dedupe career site and seo settings ([6009934](https://github.com/profilecity/vidur/commit/6009934))
- **refactor:** Use repository for public posting ([68db41f](https://github.com/profilecity/vidur/commit/68db41f))
- Remove / rearrange composables ([5d2195e](https://github.com/profilecity/vidur/commit/5d2195e))
- **refactor:** Reorg components to top level and remove nesting ([7eb40ff](https://github.com/profilecity/vidur/commit/7eb40ff))
- **format:** Update formatting to width 120 for better component HTML ([e8daca8](https://github.com/profilecity/vidur/commit/e8daca8))

#### ⚠️ Breaking Changes

- **infra:** ⚠️ Remove docker prod file from compose ([d240025](https://github.com/profilecity/vidur/commit/d240025))
- **infra:** ⚠️ Revamp docker file ([da1d815](https://github.com/profilecity/vidur/commit/da1d815))
- **settings:** ⚠️ Settings now config + merged with public settings ([6a23af9](https://github.com/profilecity/vidur/commit/6a23af9))
- **api:** ⚠️ Hooks now returned ordered based on created TS ([e4cd46e](https://github.com/profilecity/vidur/commit/e4cd46e))
- **api:** ⚠️ Hooks update no longer returns new hook ([4368797](https://github.com/profilecity/vidur/commit/4368797))
- **rendering:** ⚠️ Nested admin pages now render clientside ([52ec789](https://github.com/profilecity/vidur/commit/52ec789))
- ⚠️ Remove unused params ([9d70463](https://github.com/profilecity/vidur/commit/9d70463))
- **format:** ⚠️ Enhance code style with prettier and husky ([#108](https://github.com/profilecity/vidur/pull/108))
- **api:** ⚠️ Dedupe career site and seo settings ([6009934](https://github.com/profilecity/vidur/commit/6009934))

### ❤️ Contributors

- Amandesai01 <amandesai01@gmail.com>
- Aman Desai ([@amandesai01](http://github.com/amandesai01))
- Shivam Sharma ([@shivam-sharma7](http://github.com/shivam-sharma7))

## v0.1.0

### 🚀 Enhancements

- Dashboard widgets ([c4ab0a6](https://github.com/profilecity/vidur/commit/c4ab0a6))
- Front page for orgs ([6118a5f](https://github.com/profilecity/vidur/commit/6118a5f))
- Application status ([2d61cb5](https://github.com/profilecity/vidur/commit/2d61cb5))
- Admin-auth middlware ([c731f14](https://github.com/profilecity/vidur/commit/c731f14))
- Integrate onboarding ([f977348](https://github.com/profilecity/vidur/commit/f977348))
- Generalised modal ([f890d4c](https://github.com/profilecity/vidur/commit/f890d4c))
- Abstract confirmation box wrapper ([7714c4a](https://github.com/profilecity/vidur/commit/7714c4a))
- Api: general setting RU ([8d3ab97](https://github.com/profilecity/vidur/commit/8d3ab97))
- Version controlled seeding for db ([b2a46ae](https://github.com/profilecity/vidur/commit/b2a46ae))
- Settings page crud ([ec20fc8](https://github.com/profilecity/vidur/commit/ec20fc8))
- Revamp hook ui to card based ([f8edaff](https://github.com/profilecity/vidur/commit/f8edaff))
- Members api ([4944115](https://github.com/profilecity/vidur/commit/4944115))
- User lookup api ([a0eb1f8](https://github.com/profilecity/vidur/commit/a0eb1f8))
- Members ([4f95298](https://github.com/profilecity/vidur/commit/4f95298))
- Fonts support ([f72e3b9](https://github.com/profilecity/vidur/commit/f72e3b9))
- **api:** Applicants for posting ([440b4a1](https://github.com/profilecity/vidur/commit/440b4a1))
- General dropdown ([dfbadcc](https://github.com/profilecity/vidur/commit/dfbadcc))
- Reusable options selector ([87e8266](https://github.com/profilecity/vidur/commit/87e8266))
- Api for postings and integration ([e251538](https://github.com/profilecity/vidur/commit/e251538))
- Applicants page ([feb3e16](https://github.com/profilecity/vidur/commit/feb3e16))
- Applications UI ([2667e4e](https://github.com/profilecity/vidur/commit/2667e4e))
- One-time key to enable onboarding ([f2a78df](https://github.com/profilecity/vidur/commit/f2a78df))
- **s3:** BlobStorage supporting s3 and local fs. ([4ee5872](https://github.com/profilecity/vidur/commit/4ee5872))
- **s3-integration:** Use S3 storage in prod and local in dev mode. ([#28](https://github.com/profilecity/vidur/pull/28))
- Move mount dir to public to serve from same server ([7782c1a](https://github.com/profilecity/vidur/commit/7782c1a))
- Image cropper ([27b0058](https://github.com/profilecity/vidur/commit/27b0058))
- Org logo update integration ([68902b8](https://github.com/profilecity/vidur/commit/68902b8))
- Asset base dynamic ([ee217c6](https://github.com/profilecity/vidur/commit/ee217c6))
- Docker dev setup ([#24](https://github.com/profilecity/vidur/pull/24))
- Inmemory caching ([6c1ca82](https://github.com/profilecity/vidur/commit/6c1ca82))
- Settings cached ([928b445](https://github.com/profilecity/vidur/commit/928b445))
- Settings integrated into page ([f5990a5](https://github.com/profilecity/vidur/commit/f5990a5))
- Featured links integrated ([#48](https://github.com/profilecity/vidur/pull/48))
- **infra:** Optimised Dockerfile Prod ([#32](https://github.com/profilecity/vidur/pull/32))
- Save static data to server and serve from endpoint ([6965523](https://github.com/profilecity/vidur/commit/6965523))
- Ability to bypass admin check (for devs) ([fcd52ec](https://github.com/profilecity/vidur/commit/fcd52ec))
- Wysiwyg editor ([#73](https://github.com/profilecity/vidur/pull/73))
- Runtime config to delay response ([78a8029](https://github.com/profilecity/vidur/commit/78a8029))
- AsyncAction component ([8037aa4](https://github.com/profilecity/vidur/commit/8037aa4))
- Docker Compose Profiles ([#71](https://github.com/profilecity/vidur/pull/71))
- General `<AbstractSingleSelect/>` component ([dcb6c43](https://github.com/profilecity/vidur/commit/dcb6c43))
- General `<AbstractSocialSelector/>` component ([81dd43a](https://github.com/profilecity/vidur/commit/81dd43a))
- Update settings schema with further fields ([e99e71f](https://github.com/profilecity/vidur/commit/e99e71f))
- General `<AbstractCompanySizeSelector/>` component ([8944ae9](https://github.com/profilecity/vidur/commit/8944ae9))
- Disable ssr for admin pages ([d4ab201](https://github.com/profilecity/vidur/commit/d4ab201))
- **ui:** Button component ([93cefd7](https://github.com/profilecity/vidur/commit/93cefd7))
- **ui:** Switch component ([1f1c384](https://github.com/profilecity/vidur/commit/1f1c384))
- **ui:** Common tab-based routing ([4819bdf](https://github.com/profilecity/vidur/commit/4819bdf))
- **settings:** ⚠️ Rename organizationSettings to careerSite. ([fca5906](https://github.com/profilecity/vidur/commit/fca5906))
- **ui:** Add loading indicator ([7d90050](https://github.com/profilecity/vidur/commit/7d90050))
- **ui:** Only allow desktop access for admin panel ([8a4e3b9](https://github.com/profilecity/vidur/commit/8a4e3b9))
- **ui:** Stepper component ([ab64ed6](https://github.com/profilecity/vidur/commit/ab64ed6))
- ⚠️ Onboarding sequence ([abca6bb](https://github.com/profilecity/vidur/commit/abca6bb))

### 🔥 Performance

- Restructure onboarding check ([74a2be8](https://github.com/profilecity/vidur/commit/74a2be8))

### 🩹 Fixes

- Issue where publish was not initialised ([c159c6e](https://github.com/profilecity/vidur/commit/c159c6e))
- Validation issue ([371f77d](https://github.com/profilecity/vidur/commit/371f77d))
- Empty posting condition fix ([d0fc1c7](https://github.com/profilecity/vidur/commit/d0fc1c7))
- **deploy:** Inline dynamic imports ([1c9a284](https://github.com/profilecity/vidur/commit/1c9a284))
- Read env file in prod ([eb05d30](https://github.com/profilecity/vidur/commit/eb05d30))
- **db:** Typing and prod connection ([62e2e40](https://github.com/profilecity/vidur/commit/62e2e40))
- **logging:** Log only in dev mode ([a34596c](https://github.com/profilecity/vidur/commit/a34596c))
- **user:** Null pointer check for unonboarded users ([b501e72](https://github.com/profilecity/vidur/commit/b501e72))
- **user:** Null pointer check for unonboarded user handle ([6a03210](https://github.com/profilecity/vidur/commit/6a03210))
- **hook:** Call outside dev mode ([91ff5ff](https://github.com/profilecity/vidur/commit/91ff5ff))
- **posting:** Remove owner id constraint till permissions implemented ([796e794](https://github.com/profilecity/vidur/commit/796e794))
- **posting:** Remove owner id constraint till permissions implemented ([9771a78](https://github.com/profilecity/vidur/commit/9771a78))
- License and readme ([46535dc](https://github.com/profilecity/vidur/commit/46535dc))
- License and codeofconduct ([4d43e0e](https://github.com/profilecity/vidur/commit/4d43e0e))
- Dark selectors removed ([d112c79](https://github.com/profilecity/vidur/commit/d112c79))
- Require confirmation before delete ([e0b4540](https://github.com/profilecity/vidur/commit/e0b4540))
- Style: ring color is zinc ([4f11aaa](https://github.com/profilecity/vidur/commit/4f11aaa))
- Moveback drizzle file ([c6667b8](https://github.com/profilecity/vidur/commit/c6667b8))
- Settings-api: save update timestamp ([46349c2](https://github.com/profilecity/vidur/commit/46349c2))
- Ui: mobilefriendly styling ([35e11b0](https://github.com/profilecity/vidur/commit/35e11b0))
- Rename schema ([b5620b4](https://github.com/profilecity/vidur/commit/b5620b4))
- Settings page lazy loaded ([7f3a8fd](https://github.com/profilecity/vidur/commit/7f3a8fd))
- Validation for settings ([8aa693c](https://github.com/profilecity/vidur/commit/8aa693c))
- Validation for general settings ([0d5010a](https://github.com/profilecity/vidur/commit/0d5010a))
- **ui:** Manual truncating of long url ([0a807bd](https://github.com/profilecity/vidur/commit/0a807bd))
- Applicants page is now applications page ([b7199ef](https://github.com/profilecity/vidur/commit/b7199ef))
- Posting applicants table not null ([67833a1](https://github.com/profilecity/vidur/commit/67833a1))
- Edge cases fixed for applications api ([6155252](https://github.com/profilecity/vidur/commit/6155252))
- Hydration issue for postings dropdown ([0d407b9](https://github.com/profilecity/vidur/commit/0d407b9))
- Reactivity of application composable ([b9a8e14](https://github.com/profilecity/vidur/commit/b9a8e14))
- Nuxt prod issue ref: (nuxt/nuxt#28257) ([#28257](https://github.com/profilecity/vidur/issues/28257))
- Bug to populate users with no handle ([20c0e36](https://github.com/profilecity/vidur/commit/20c0e36))
- SettingsGeneralUpdate components generalised to fit wider usecases ([0470922](https://github.com/profilecity/vidur/commit/0470922))
- Missing required prop warning ([7725790](https://github.com/profilecity/vidur/commit/7725790))
- Type safety for public page ([74674e1](https://github.com/profilecity/vidur/commit/74674e1))
- Env issue and node_module mount issue ([39d0a4c](https://github.com/profilecity/vidur/commit/39d0a4c))
- Keep origin public ([44dc807](https://github.com/profilecity/vidur/commit/44dc807))
- Make auth in sync ([2a8c9cc](https://github.com/profilecity/vidur/commit/2a8c9cc))
- Rewrite posting page to support SEO ([03a2247](https://github.com/profilecity/vidur/commit/03a2247))
- Different seo and careers page ([9989a7c](https://github.com/profilecity/vidur/commit/9989a7c))
- Tick function for remote assets ([530fd91](https://github.com/profilecity/vidur/commit/530fd91))
- Integrate org links for career page ([a86f4d5](https://github.com/profilecity/vidur/commit/a86f4d5))
- Metadata default value in db ([#53](https://github.com/profilecity/vidur/pull/53))
- **save button:** Confirmartion box ([#51](https://github.com/profilecity/vidur/pull/51))
- Use public endpoint for ssr settings ([5650064](https://github.com/profilecity/vidur/commit/5650064))
- Expose remote assets config from backend ([f15fe79](https://github.com/profilecity/vidur/commit/f15fe79))
- Dedupe user fetch requests ([1feb2cf](https://github.com/profilecity/vidur/commit/1feb2cf))
- Docker image start ([74bf031](https://github.com/profilecity/vidur/commit/74bf031))
- Save btn ([cdcac60](https://github.com/profilecity/vidur/commit/cdcac60))
- Org name from settings in sidebar ([db6d84c](https://github.com/profilecity/vidur/commit/db6d84c))
- **infra:** Optimize docker build time ([#66](https://github.com/profilecity/vidur/pull/66))
- Inconsistency in asset endpoint ([a2b664d](https://github.com/profilecity/vidur/commit/a2b664d))
- **ui:** CSS Value changed for number ([#65](https://github.com/profilecity/vidur/pull/65))
- Reactive fetched-once settings ([c8dcebd](https://github.com/profilecity/vidur/commit/c8dcebd))
- Ensure form labels match input IDs ([#63](https://github.com/profilecity/vidur/pull/63))
- Loading state for `edit.vue` ([3f8481f](https://github.com/profilecity/vidur/commit/3f8481f))
- Hydration issue by removing `v-show`nuxt/icon#101 ([#101](https://github.com/profilecity/vidur/issues/101))
- Type error for date format options ([#87](https://github.com/profilecity/vidur/pull/87))
- **Editor:** Issue where text assigned before mounting ([6de304c](https://github.com/profilecity/vidur/commit/6de304c))
- **cache:** Update execution order ([b757e7b](https://github.com/profilecity/vidur/commit/b757e7b))
- **Editor:** Issue where text assigned before mounting" ([d067493](https://github.com/profilecity/vidur/commit/d067493))
- **infra:** Await for db connection for Docker dev ([#102](https://github.com/profilecity/vidur/pull/102))
- **auth:** External redirect to signin ([0f2874f](https://github.com/profilecity/vidur/commit/0f2874f))
- **admin:** Runtime config for provider details ([#99](https://github.com/profilecity/vidur/pull/99))
- **api:** Unexpose total applications from public endpoint ([51ede2f](https://github.com/profilecity/vidur/commit/51ede2f))
- **ui:** Editor contents ([2e7a5bc](https://github.com/profilecity/vidur/commit/2e7a5bc))
- **ui:** Text align left on lg ([6f7c8df](https://github.com/profilecity/vidur/commit/6f7c8df))
- **ui:** Update sidebar link to work with nuxt 13 ([39de9d4](https://github.com/profilecity/vidur/commit/39de9d4))
- **ui:** Button allow disabled ([37dbd2b](https://github.com/profilecity/vidur/commit/37dbd2b))

### 💅 Refactors

- **auth:** Full auth rewrite ([04c56ee](https://github.com/profilecity/vidur/commit/04c56ee))

### 📖 Documentation

- Readme changes ([#19](https://github.com/profilecity/vidur/pull/19))
- Update dev setup instructions ([1762564](https://github.com/profilecity/vidur/commit/1762564))
- Update discord link ([6dcba1e](https://github.com/profilecity/vidur/commit/6dcba1e))
- **readme:** Broken link of website and discord ([#84](https://github.com/profilecity/vidur/pull/84))
- **readme:** Misspelled grammar ([#91](https://github.com/profilecity/vidur/pull/91))

### 🏡 Chore

- Update deps ([00ea3aa](https://github.com/profilecity/vidur/commit/00ea3aa))
- Use old nuxt version due to redirect issue ([314423d](https://github.com/profilecity/vidur/commit/314423d))
- Format config file ([0f67c59](https://github.com/profilecity/vidur/commit/0f67c59))
- Format oauth file ([05fdb70](https://github.com/profilecity/vidur/commit/05fdb70))
- Hardcoded assets ([708f461](https://github.com/profilecity/vidur/commit/708f461))
- Migration config ([a8752a1](https://github.com/profilecity/vidur/commit/a8752a1))
- Example env ([0ecf4ac](https://github.com/profilecity/vidur/commit/0ecf4ac))
- Update drizzle commands and setup ([da10d2b](https://github.com/profilecity/vidur/commit/da10d2b))
- Format and integrate hook ([a0e8741](https://github.com/profilecity/vidur/commit/a0e8741))
- Add title to admin panel pages ([ba27ea5](https://github.com/profilecity/vidur/commit/ba27ea5))
- Remove unnecessary params from env example ([a61350c](https://github.com/profilecity/vidur/commit/a61350c))
- Restructure: move nuxt to src and readme to docs ([0fc98ab](https://github.com/profilecity/vidur/commit/0fc98ab))
- Formatting ([3dbce53](https://github.com/profilecity/vidur/commit/3dbce53))
- Format: modify print width ([6795926](https://github.com/profilecity/vidur/commit/6795926))
- Update env example with correct values ([b9be87d](https://github.com/profilecity/vidur/commit/b9be87d))
- Public posting page, 100x speedup ([d28b48a](https://github.com/profilecity/vidur/commit/d28b48a))
- Posting: cleanup dead code ([e2b83fb](https://github.com/profilecity/vidur/commit/e2b83fb))
- Add metadata table ([5199a47](https://github.com/profilecity/vidur/commit/5199a47))
- Re update nuxt since issue resolved ([3062eca](https://github.com/profilecity/vidur/commit/3062eca))
- Updated migration for metadata folder ([f8a0d91](https://github.com/profilecity/vidur/commit/f8a0d91))
- Generalise active tab ([5d61d20](https://github.com/profilecity/vidur/commit/5d61d20))
- Generalised hook composable ([0ce6a27](https://github.com/profilecity/vidur/commit/0ce6a27))
- Log total hooks found in dev mode ([b7b2eaa](https://github.com/profilecity/vidur/commit/b7b2eaa))
- Ui updates ([#14](https://github.com/profilecity/vidur/pull/14))
- Generalise admin settings input ([4a1b824](https://github.com/profilecity/vidur/commit/4a1b824))
- Clean hooks code ([696fc88](https://github.com/profilecity/vidur/commit/696fc88))
- UI updates ([#15](https://github.com/profilecity/vidur/pull/15))
- Set lato as default font ([cfbf19a](https://github.com/profilecity/vidur/commit/cfbf19a))
- Restructure posting api ([62be200](https://github.com/profilecity/vidur/commit/62be200))
- Rearrange posting filter and data flow ([cc18377](https://github.com/profilecity/vidur/commit/cc18377))
- Update UI css ([b9cb05b](https://github.com/profilecity/vidur/commit/b9cb05b))
- Ui: fix dropdowns ([f45e362](https://github.com/profilecity/vidur/commit/f45e362))
- Ui: add whitelist colors ([1a6b6f8](https://github.com/profilecity/vidur/commit/1a6b6f8))
- Ui: make postings page card based ([5e9ffbc](https://github.com/profilecity/vidur/commit/5e9ffbc))
- Ported handles from nirvana codebase ([3a30cf2](https://github.com/profilecity/vidur/commit/3a30cf2))
- UI-refactors ([#17](https://github.com/profilecity/vidur/pull/17))
- Fonts updated ([#16](https://github.com/profilecity/vidur/pull/16))
- Ui: applicants UI refactor ([#18](https://github.com/profilecity/vidur/pull/18))
- Update version to support bundling ([dd63aa0](https://github.com/profilecity/vidur/commit/dd63aa0))
- Update version to support bundling" ([e1030f4](https://github.com/profilecity/vidur/commit/e1030f4))
- Npx nuxi upgrade --force ([919a7ce](https://github.com/profilecity/vidur/commit/919a7ce))
- Ui: gap for multiple applicants ([12d3513](https://github.com/profilecity/vidur/commit/12d3513))
- Add nuxt-cropper deps ([80b6f02](https://github.com/profilecity/vidur/commit/80b6f02))
- **format:** Nuxt config ([03506d7](https://github.com/profilecity/vidur/commit/03506d7))
- Update nuxt compatibility date ([6091850](https://github.com/profilecity/vidur/commit/6091850))
- **auth:** Update acceptable client id ([eb998c6](https://github.com/profilecity/vidur/commit/eb998c6))
- **ui:** Remove bad parens ([53e3180](https://github.com/profilecity/vidur/commit/53e3180))
- **ui:** Initial onboarding prototype ([5f17ac5](https://github.com/profilecity/vidur/commit/5f17ac5))
- **config:** Global storage config ([755f4f6](https://github.com/profilecity/vidur/commit/755f4f6))
- Auto display updated image ([931abdb](https://github.com/profilecity/vidur/commit/931abdb))
- **seo:** Remove keywords field since deprecated ref: https://web.dev/learn/html/metadata/#keywords ([4fab07c](https://github.com/profilecity/vidur/commit/4fab07c))
- **ui:** Onboarding refactor ([06c7709](https://github.com/profilecity/vidur/commit/06c7709))
- Integrate settings to frontend ([abfc46c](https://github.com/profilecity/vidur/commit/abfc46c))
- **ui:** Generalise `btn` naming convention ([#45](https://github.com/profilecity/vidur/pull/45))
- Fix featued links validaton ([b31aa25](https://github.com/profilecity/vidur/commit/b31aa25))
- Make logo firstclass member of settings and integrate new asset storage pattern ([34b4a81](https://github.com/profilecity/vidur/commit/34b4a81))
- Configure dependabot to manage npm dependencies upgrades ([#57](https://github.com/profilecity/vidur/pull/57))
- **refactor:** Aspect ration as prop ([f31353c](https://github.com/profilecity/vidur/commit/f31353c))
- Template for people while making a PR ([#46](https://github.com/profilecity/vidur/pull/46))
- **format:** Api call composable ([6620a6c](https://github.com/profilecity/vidur/commit/6620a6c))
- Minor typing tweaks ([edbbc75](https://github.com/profilecity/vidur/commit/edbbc75))
- Revamp dropdown selector to `v-model` ([b4405de](https://github.com/profilecity/vidur/commit/b4405de))
- Integrate updated settings to form ([85e3b76](https://github.com/profilecity/vidur/commit/85e3b76))
- **format:** Supress vscode error for `@apply` directive ([f2fc73a](https://github.com/profilecity/vidur/commit/f2fc73a))
- **ui:** Generalise input text and labels ([b61deed](https://github.com/profilecity/vidur/commit/b61deed))
- **ui:** Use `<fieldset>` for input groups ([8e253ed](https://github.com/profilecity/vidur/commit/8e253ed))
- **ui:** Remove default CSS ([92270ef](https://github.com/profilecity/vidur/commit/92270ef))
- **ui:** Install `radix-vue` for unstyled components ([b5b2e59](https://github.com/profilecity/vidur/commit/b5b2e59))
- **ui:** Cva and utils to merge classes ([db5e379](https://github.com/profilecity/vidur/commit/db5e379))
- **refactor:** Ui: integrate generalised button ([da59207](https://github.com/profilecity/vidur/commit/da59207))
- **ui:** Radix `Label` instead of raw label ([2cac8cc](https://github.com/profilecity/vidur/commit/2cac8cc))
- **infra:** Optimise docker build performance by excluding files ([#96](https://github.com/profilecity/vidur/pull/96))
- **ui:** Migrate Modal to radix-vue `Dialog` ([1e8748e](https://github.com/profilecity/vidur/commit/1e8748e))
- **infra:** Do not allow port customisation in dev mode. ([1e7966b](https://github.com/profilecity/vidur/commit/1e7966b))
- **ui:** Remove border from sidebar orgInfo ([53a3402](https://github.com/profilecity/vidur/commit/53a3402))
- **public-page:** Fix UI and bugs on public pages ([0a63701](https://github.com/profilecity/vidur/commit/0a63701))
- **ui:** Supress Editor warning for initial undefined modal value ([07ac9ff](https://github.com/profilecity/vidur/commit/07ac9ff))
- **infra:** Install updated deps when container restarts ([5b40fc9](https://github.com/profilecity/vidur/commit/5b40fc9))
- **ui:** Styling for dialog title and desc ([9b999e2](https://github.com/profilecity/vidur/commit/9b999e2))
- **format:** Kebab case styling for v-bind shorthand ([beccf79](https://github.com/profilecity/vidur/commit/beccf79))
- **ui:** Revamp for hooks ([999bbce](https://github.com/profilecity/vidur/commit/999bbce))
- **ui:** Revamp edit page ([e3b6f8d](https://github.com/profilecity/vidur/commit/e3b6f8d))
- **api:** Remove unwanted endpoint ([e4e940b](https://github.com/profilecity/vidur/commit/e4e940b))
- **editor:** Fix typing by allowing null modelValue ([3679a0e](https://github.com/profilecity/vidur/commit/3679a0e))
- **seed:** Expose seed funcs and call from task to allow reuse ([33ea4d6](https://github.com/profilecity/vidur/commit/33ea4d6))
- **server:** Call functions manually to ensure execution order ([f5d9d47](https://github.com/profilecity/vidur/commit/f5d9d47))
- **server:** Merge plugins to ensure order ([f021ca9](https://github.com/profilecity/vidur/commit/f021ca9))
- **server:** Remove tasks for seed db and cache ([ad41c7a](https://github.com/profilecity/vidur/commit/ad41c7a))
- **server:** Log first setup access key ([9658c9c](https://github.com/profilecity/vidur/commit/9658c9c))
- **app:** Deprecate remote asset api and merge with general config ([91990b8](https://github.com/profilecity/vidur/commit/91990b8))
- **dropdown:** Type fix for modelValue ([4674848](https://github.com/profilecity/vidur/commit/4674848))
- **format:** Input form ([e99d556](https://github.com/profilecity/vidur/commit/e99d556))
- **ui:** InputText prop type fix ([6575124](https://github.com/profilecity/vidur/commit/6575124))
- **refactor:** UseFetch instead of async data ([fb84a6d](https://github.com/profilecity/vidur/commit/fb84a6d))
- **refactor:** Seeds ([83a35b8](https://github.com/profilecity/vidur/commit/83a35b8))

#### ⚠️ Breaking Changes

- **settings:** ⚠️ Rename organizationSettings to careerSite. ([fca5906](https://github.com/profilecity/vidur/commit/fca5906))
- ⚠️ Onboarding sequence ([abca6bb](https://github.com/profilecity/vidur/commit/abca6bb))

### ❤️ Contributors

- Amandesai01 <amandesai01@gmail.com>
- Shivam Sharma ([@shivam-sharma7](http://github.com/shivam-sharma7))
- Akash Varun ([@akashvarun10](http://github.com/akashvarun10))
- Devshahofficial <devshahofficial001@gmail.com>
- HemalDesai ([@HemalDesai](http://github.com/HemalDesai))
- Pramath ([@pramaths](http://github.com/pramaths))
- Harshil15999 A.k.a Dark0angel ([@harshil15999](http://github.com/harshil15999))
- Anirban Roy ([@listerys](http://github.com/listerys))
- Sohni Rais ([@raiss15](http://github.com/raiss15))
- Hardik Jain ([@HardikSJain](http://github.com/HardikSJain))
- Dhanush ([@Dhanush295](http://github.com/Dhanush295))
- Pushkar Mishra ([@Pushkarm029](http://github.com/Pushkarm029))
- Aman Desai ([@amandesai01](http://github.com/amandesai01))
- Dev Shailesh Shah ([@devshahofficial](http://github.com/devshahofficial))
