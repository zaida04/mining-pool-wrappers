# SPEC
All packages in this monorepo will be structures as such.

```
.
├── 
├── __tests__
│   └── index.test.ts
├── lib
│   └── index.ts
├── package.json
├── README.md
└── tsconfig.json
```

`lib` is where the main files for the library will live.  
`__tests__` is where the testing files for the library will live.  


`tsconfig.json` should be structured as such:
```json
{
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
        "outDir": "./dist",
        "declarationDir": "./types"
    },
    "include": [
        "./lib/**/*.ts"
    ]
}
```

`README.md` should be structured as such [`README-example`](https://github.com/zaida04/mining-pool-wrappers/blob/master/packages/README.md)