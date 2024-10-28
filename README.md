Mostly forked from [https://github.com/jbigman/cv-react](https://github.com/jbigman/cv-react)
## Continuous Integration with GitHub Actions

- Triggers on any push/merge to the master branch. (Tutorial available at [nuxt.com](https://nuxt.com/deploy/github-pages))

- Deploys on GitHub Pages to be accessible at [https://jbigman.github.io/cv-nuxt](https://jbigman.github.io/cv-nuxt)

## Local Development

- `yarn install` to download all dependencies

- `yarn serve` to test the application on localhost

## Dependencies

#### **[Nuxt](https://nuxt.com/)**
Nuxt.js allows you to build applications by extending the functionalities of **VueJs**.

#### [@biomejs/biome](https://biomejs.dev/)
Biome analyzes code to check coding rules and conventions, as well as common error sources, to anticipate problems.  
Why use Biome instead of ESLint? It’s faster and requires fewer manual dependencies.

## Monitoring

#### [Snyk.io](https://snyk.io) [![Known Vulnerabilities](https://snyk.io/test/github/jbigman/cv-nuxt/badge.svg)](https://snyk.io/test/github/jbigman/cv-nuxt)
Checks for detected security vulnerabilities in the code, provides detailed explanations of the detected issues, and suggests solutions.

#### [Depfu](https://depfu.com)  [![Depfu](https://badges.depfu.com/badges/5b9ce9dee00c8b16b2bf6a977e799c04/count.svg)](https://depfu.com/github/jbigman/cv-nuxt?project_id=49048)
Monitors dependency versions and automatically suggests merging updates into package.json.
