# TypeScript Cloudflare Workers Project Template

## Libraries

* [NVM](https://github.com/nvm-sh/nvm) - Node environment manager.
* [Webpack](https://webpack.js.org/) - Build tool.
* [Wrangler]() - CloudFlare Worker deployment tool.
* [ESLint](https://eslint.org/) - Linter.
* [Prettier](https://prettier.io/) - Code formatter.
* [Jest](https://jestjs.io/) - JavaScript Test Framework.
* [Travis CI](https://travis-ci.org/) - Automated build pipeline.


## Getting Started

[Use this Github Repository Template](https://github.com/50onred/cloudflare-worker-typescript-template/generate) or fork the repo to get started.


### Node Environment Setup

This project uses [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)

Install correct version of node:

```bash
nvm install
```

To activate the correct version:

```bash
nvm use
```

### Install Dependencies

```bash
npm i
```

### :fire: Code Away :fire:

### Run your code locally

```bash
npm run server
```

### Preview Your Worker on CloudFlare

```bash
npm run preview
```

### Deploy Your Code to Production

First, edit the [wrangler.toml](wrangler.toml) file with your production configuration for Cloudflare.

Deploy your code with:

```bash
npm run publish
```

## Other Tools/Libraries to Consider:

* [Cloudflare KV Asset Handler](https://github.com/cloudflare/kv-asset-handler) - Great tool to use if serving up assets and/or single-page apps. Integrates nicely with Wrangler
* [Wercker](https://app.wercker.com/) - Build automation / deployment.
