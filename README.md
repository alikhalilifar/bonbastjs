# BonbastJS
A simple js scrapper for bonbast exchange rates.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)

## Installation

```
yarn add bonbastjs
npm install bonbastjs
```

## Usage

This package only has a single function to invoke, which returns all the bonbast json data:

```
import bonbastjs from 'bonbastjs';

(async () => {
  const exchangeRates = await bonbastjs();
})();
```

## Support

Please [open an issue](https://github.com/alikhalilifar/bonbastjs/issues/new) for support.
