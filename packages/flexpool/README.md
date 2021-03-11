# `flexpool`  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/zaida04/flexpool?color=crimson&logo=npm)](https://www.npmjs.com/package/zaida04/flexpool) [![Quality Check](https://github.com/zaida04/mining-pool-wrappers/actions/workflows/quality.yml/badge.svg)](https://github.com/zaida04/mining-pool-wrappers/actions/workflows/quality.yml)

## Installation
- `npm install flexpool`  
- `yarn add flexpool`

## Usage
There are two exported objects in this package. `Routes` and `Util`. Routes provides a straight way to make the API requests, plain and simple, while Util will include utility methods and wrappers over all the API requests in order to simplify them.

Using Routes:

```ts
import { Routes } from "flexpool";

const ADDRESS = '0xeXXXXXXXXXXXXXX';

const main = async () => {
    const data = await Routes.miner.balance(ADDRESS);
    console.log(data);
};

main();

```

Using Util:
```ts
import { Utils } from "flexpool";

const ADDRESS = '0xeXXXXXXXXXXXXXX';
const main_miner = Utils.miner(ADDRESS);

const main = async () => {
    const data = await main_miner.balance();
    console.log(data);
}
```

## Documentation
There is currently no documentation. Stay tuned!

## Contributing
Please see the main [README.md](https://github.com/zaida04/mining-pool-wrappers) for info on how to contribute to this package or the other mining-pool-wrappers packages.

## LICENSE
Licensed under the [MIT License](https://github.com/zaida04/mining-pool-wrappers/blob/master/LICENSE)