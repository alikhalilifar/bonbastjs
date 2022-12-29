# BonbastJS
A simple js scrapper to get all the bonbast exchange rates.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)

## Installation

### Package manager

Using npm:

```bash
npm install bonbastjs
```

Using yarn:

```bash
yarn add bonbastjs
```

## Usage

This package only has a single function to invoke, which returns all the bonbast json data:

```js
import bonbastjs from 'bonbastjs';

(async () => {
  const exchangeRates = await bonbastjs();
})();
```

Sample response: 

```js
{
  try1: '2355',
  month: 10,
  emami1: '21900000',
  afn2: '500',
  afn1: '505',
  rub2: '600',
  azadi1_22: '12700000',
  bhd2: '116350',
  azn1: '25940',
  bhd1: '116850',
  azadi1g: '4600000',
  bourse: '1904324.2',
  try2: '2335',
  cny1: '6310',
  cny2: '6290',
  cad1: '32410',
  cad2: '32310',
  jpy1: '3280',
  thb1: '1265',
  usd1: '44000',
  usd2: '43900',
  thb2: '1260',
  azn2: '25840',
  dkk1: '6290',
  amd2: '1115',
  day: 8,
  minute: '17',
  amd1: '1120',
  bitcoin: '16533.72',
  hour: '03',
  sar2: '11685',
  rub1: '605',
  azadi1g2: '4300000',
  azadi12: '20000000',
  eur1: '46760',
  eur2: '46610',
  emami12: '21550000',
  second: '04',
  omr1: '114415',
  year: 1401,
  chf2: '47285',
  chf1: '47435',
  azadi1_42: '9600000',
  jpy2: '3270',
  kwd2: '143415',
  kwd1: '143815',
  sek1: '4210',
  gbp2: '52815',
  gbp1: '53015',
  sek2: '4195',
  myr1: '9960',
  myr2: '9930',
  omr2: '114115',
  azadi1: '20700000',
  azadi1_2: '13000000',
  aud2: '29655',
  azadi1_4: '10000000',
  aud1: '29755',
  dkk2: '6270',
  inr2: '530',
  inr1: '530',
  last_modified: 'December 28, 2022 16:35',
  aed2: '11975',
  aed1: '11995',
  iqd2: '3005',
  qar1: '12100',
  qar2: '12070',
  iqd1: '3015',
  hkd2: '5625',
  hkd1: '5655',
  sar1: '11715',
  created: 'December 28, 2022 00:01',
  sgd2: '32540',
  sgd1: '32640',
  ounce: '1805.56',
  weekday: 'Thursday',
  mithqal: '8630000',
  gol18: '1992242',
  nok1: '4455',
  nok2: '4440'
}
```

## Support

Please [open an issue](https://github.com/alikhalilifar/bonbastjs/issues/new) for support.
