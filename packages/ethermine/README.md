# `ethermine`  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/ethermine?color=crimson&logo=npm)](https://www.npmjs.com/package/ethermine) [![TypeScript](https://github.com/zaida04/mining-pool-wrappers/actions/workflows/quality.yml/badge.svg)](https://github.com/zaida04/mining-pool-wrappers/actions/workflows/quality.yml)

## About
This package is a wrapper for the [Ethermine API](https://ethermine.org/api/worker). It is written in TypeScript and is usable in either JavaScript or TypeScript projects. It comes with typings out of the box for your convenience. In addition to this package wrapping over API Endpoints, it also provides typings for all the API Endpoints. 

## Installation
You can install this package from [NPM](https://www.npmjs.com/package/ethermine)

- `npm install ethermine`  
- `yarn add ethermine`

## Usage
There are two exported objects in this package. `Routes` and `Util`. Routes provides a straight way to make the API requests, plain and simple (e.x. `Routes.miner.history(ADDRESS)`), while Util will include utility methods and wrappers over all the API requests in order to simplify them. This is so you don't have to supply things like the address for every request, and instead have an object representing, for example, a specific Miner, that you can just call methods on and have the address automatically stored.

Using Routes:

```ts
// CommonJS require
const { Routes } = require("ethermine");
// ES6 Import
import { Routes } from "ethermine";

Routes.miner.history("0xeXXXXXXXXXXXXXX").then(data => console.log(data));
```

Using Util:
```ts
// CommonJS require
const { Utils } = require("ethermine");
// ES6 Import
import { Utils } from "ethermine";

const main_miner = Utils.miner("0xeXXXXXXXXXXXXXX");
main_miner.history().then(data => console.log(data));
```

In addition to the above objects, all the API Typings are exported as well for your convenience. They are formatted as such: `{HTTPMETHOD}{GROUP}{ACTION}`, so for example `GetPoolNetworkStats`. All of these have a jsdoc comment (custom) of `@destination` which will tell you what endpoint the interface corresponds to.

## Documentation
You can find the documentation at https://zaida04.github.io/mining-pool-libs-documentation/

## Contributing
Please see the main [README.md](https://github.com/zaida04/mining-pool-wrappers) for info on how to contribute to this package or the other mining-pool-wrappers packages.

## LICENSE
Licensed under the [MIT License](https://github.com/zaida04/mining-pool-wrappers/blob/master/LICENSE)

## Have questions? Ask on my [Discord](https://discord.gg/jf66UUN)