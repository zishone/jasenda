# jasenda [![NPM](https://img.shields.io/npm/v/@zishone/jasenda)](https://www.npmjs.com/package/@zishone/jasenda) [![Build](https://github.com/zishone/jasenda/workflows/build/badge.svg)](https://github.com/zishone/jasenda/actions?query=workflow%3Abuild) [![Coverage](https://codecov.io/gh/zishone/jasenda/branch/main/graph/badge.svg?token=bP9dagN3Gs)](https://codecov.io/gh/zishone/jasenda) [![License](https://img.shields.io/github/license/zishone/jasenda)](https://github.com/zishone/jasenda/blob/master/LICENSE)
A middleware to add [jsend](https://github.com/omniti-labs/jsend) helper functions to the response object.

## Installation
```shell
$ npm i @zishone/jasenda
```
## Usage
```javascript
const express = require('express');
const { jsend } = require('@zishone/jasenda');

const app = express();

app.use(jsend());

app.get('/success', (req, res) => {
  res.jsend.success({ /* any data */ }/*, 2XX*/);
});

app.get('/fail', (req, res) => {
  res.jsend.fail({ /* any data */ }/*, 4XX*/);
});

app.get('/error', (req, res) => {
  res.jsend.fail('An error message'/*, 5XX, errorCodeNumber, { any data }*/);
});

app.listen(port, () => {
  console.log('Listening at port 3000')
})
```

## Authors
* **Zishran Garces**

See also the list of [contributors](https://github.com/zishone/jasenda/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/zishone/jasenda/blob/master/LICENSE) file for details.
