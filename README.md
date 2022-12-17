# hyperhtml-serializer

[![CI][gha-image]][gha-url]
[![NPM version][npm-image]][npm-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
[![codecov][codecov-image]][codecov-url]

> [Jest](https://github.com/facebook/jest) snapshot serializer that beautifies [hyperHTML](https://github.com/WebReflection/hyperHTML) snapshots.

## Note

**This version is working with `hyperhtml` version `>=2.19`**  
For [`hyperhtml@2.4 - 2.18` versions consult the `1.x` branch](https://github.com/douglasduteil/hyperhtml-serializer/tree/1.x)

## Why ?

This serializer it made to remove :

- hyperHTML `_hyper` comments like `<!--_hyper: (\d+);-->`

Before :

```js
<foo-hyper-app>
  <!-- This is my comment -->
  <h1>Hello hyperHTML !</h1>
  <!--_hyper: 123546789;-->
  <h1>Hello world !</h1>
  <!--_hyper: 123546789;-->
</foo-hyper-app>
```

After :

```js
<foo-hyper-app>
  <!-- This is my comment -->
  <h1>Hello hyperHTML !</h1>

  <h1>Hello world !</h1>

</foo-hyper-app>
```

## Install

```sh
$ npm install --save-dev hyperhtml-serializer
# or
$ yarn add -D hyperhtml-serializer
```

## Usage

Add in your `package.json`.

```json
{
  "jest": {
    "snapshotSerializers": ["hyperhtml-serializer"]
  }
}
```

## License

    Copyright © 2018 Douglas Duteil <douglasduteil@gmail.com>
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the LICENCE file for more details.

[codecov-url]: https://codecov.io/gh/douglasduteil/hyperhtml-serializer
[codecov-image]: https://codecov.io/gh/douglasduteil/hyperhtml-serializer/branch/master/graph/badge.svg?token=ErvTZOUIxp
[npm-url]: https://npmjs.org/package/hyperhtml-serializer
[npm-image]: http://img.shields.io/npm/v/hyperhtml-serializer.svg
[gha-url]: https://github.com/douglasduteil/hyperhtml-serializer/actions/workflows/ci.yml
[gha-image]: https://github.com/douglasduteil/hyperhtml-serializer/actions/workflows/ci.yml/badge.svg
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org*
