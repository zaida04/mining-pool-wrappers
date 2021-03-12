# `ethermine`  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/ethermine?color=crimson&logo=npm)](https://www.npmjs.com/package/ethermine) [![TypeScript](https://github.com/zaida04/mining-pool-wrappers/actions/workflows/quality.yml/badge.svg)](https://github.com/zaida04/mining-pool-wrappers/actions/workflows/quality.yml)

## About
This package is a wrapper for the [Ethermine API](https://ethermine.org/api/worker). It is written in TypeScript is usable in either JavaScript or TypeScript projects. It comes with typings out of the box for your convenience. In addition this package wrapping over API Endpoints, it also provides typings for all the API Endpoints. 

## Installation
You can install this package from [NPM](https://www.npmjs.com/package/ethermine)

- `npm install ethermine`  
- `yarn add ethermine`

## Usage
There are two exported objects in this package. `Routes` and `Util`. Routes provides a straight way to make the API requests, plain and simple (e.x. `Routes.miner.history(ADDRESS)`), while Util will include utility methods and wrappers over all the API requests in order to simplify them. This is so you don't have to supply things like the address for every request, and instead have an object representing, for example, a specific Miner, that you can just call methods on and have the address automatically stored.

Using Routes:

```ts
import { Routes } from "ethermine";

const ADDRESS = '0xeXXXXXXXXXXXXXX';

const main = async () => {
    const data = await Routes.miner.history(ADDRESS);
    console.log(data);
};

main();

```

Using Util:
```ts
import { Utils } from "ethermine";

const ADDRESS = '0xeXXXXXXXXXXXXXX';
const main_miner = Utils.miner(ADDRESS);

const main = async () => {
    const data = await main_miner.history();
    console.log(data);
}
```

In addition to the above objects, all the API Typings are exported as well for your convenience. They are formatted as such: `{HTTPMETHOD}{GROUP}{ACTION}`, so for example `GetPoolNetworkStats`. All of these have a jsdoc comment (custom) of `@destination` which will tell you what endpoint the interface corresponds to.

## Documentation
You can find the documentation at https://zaida04.github.io/mining-pool-libs-documentation/

## Contributing
Please see the main [README.md](https://github.com/zaida04/mining-pool-wrappers) for info on how to contribute to this package or the other mining-pool-wrappers packages.

## LICENSE
Licensed under the [MIT License](https://github.com/zaida04/mining-pool-wrappers/blob/master/LICENSE)

## Have questions? Ask on my [Discord](https://discord.gg/jf66UUN)