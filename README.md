# esm-utils

[![npm version](https://img.shields.io/npm/v/@magda/esm-utils.svg)](https://www.npmjs.com/package/@magda/esm-utils)

Utilities help to migrate your [Node.js](https://nodejs.org/en) projects to ESM projects.

> All utility functions here don't require you to supply [import.meta.url](https://nodejs.org/api/esm.html#importmetaurl) and will use the function caller file's path as the base.

> All required dependencies are bundled -- no need to install any dependencies.

```typescript
/**
 * Allow to require modules relative to the caller file.
 * require() is not support in ESM modules. This function provides a workaround when you have to use require() in ESM modules.
 * e.g. use to load JSON files.
 * Or use to load legacy commonjs modules where formal `import` syntax is not convenient.
 * e.g. load legacy commonjs modules without type definition files.
 *
 * Please note: before use this function, you should try to use `import` syntax whenever possible.
 *
 * @param {string} id
 * @return {*}  {*}
 */
export declare function require(id: string): any;
export declare function requireResolve(id: string): string;
/**
 * This is an ESM replacement for `__filename`.
 *
 * Use it like this: `__filename()`.
 */
export declare const __filename: () => string;
/**
 * Alias of `__filename`.
 */
export declare const getCurrentFilePath: () => string;
/**
 * This is an ESM replacement for `__dirname`.
 *
 * Use it like this: `__dirname()`.
 */
export declare const __dirname: () => string;
/**
 * Alias of `__dirname`.
 */
export declare const getCurrentDirPath: () => string;
/**
 * Indicates that the script was run directly.
 * This is an ESM replacement for `require.main === module`.
 *
 * Use it like this: `isMain()`.
 */
export declare const isMain: () => boolean;
```
