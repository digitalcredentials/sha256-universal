# Universal SHA-256 digest library _(@digitalcredentials/sha256-universal)_

[![Build status](https://img.shields.io/github/workflow/status/digitalcredentials/sha256-universal/Node.js%20CI)](https://github.com/digitalcredentials/sha256-universal/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalcredentials/sha256-universal.svg)](https://npm.im/@digitalcredentials/sha256-universal)

> A minimal Typescript SHA-256 digest library for Node.js, browsers, and React Native.

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

In implementing Verifiable Credentials related libraries, we make frequent use
of SHA-256 digests, and found ourselves re-implementing the same digest functions
that had to run using native code whenever possible (native Node.js and browser 
WebCrypto API), but could also drop down to pure JS implementation for React Native.

Other universal SHA-256 libraries we've encountered either did not use the native
implementations, or did not support React Native.

## Security

* For Node.js, uses native Node `crypto`
* In browsers, uses the built-in WebCryptography API
* In React Native, uses the Microsoft Research library ([msCrypto](https://github.com/kevlened/msrCrypto))
  via `isomorphic-webcrypto`.

## Install

- Node.js 16+ is recommended.

### NPM

To install via NPM:

```
npm install @digitalcredentials/sha256-universal
```

### Development

To install locally (for development):

```
git clone https://github.com/digitalcredentials/sha256-universal.git
cd sha256-universal
npm install
```

## Usage

Usable in Typescript and Javascript.

```js
import { sha256digest } from '@digitalcredentials/sha256-universal'

await sha256digest('test')
// Uint8Array(32) [159, 134, 208, 129, 136,  76, 125, 101, 154,  47, 234, 160, 
// 197,  90, 208,  21, 163, 191,  79,  27,  43,  11, 130,  44, 209,  93, 108,  
// 21, 176, 240,  10,   8]
```

This function is mostly used to turn strings (at the moment, it only supports
strings as input, so if you have raw bytes, text-encode them) into an array
of digest bytes (which can then be base-X-encoded, etc).

## Contribute

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT License](LICENSE.md) © 2022 Digital Credentials Consortium.
