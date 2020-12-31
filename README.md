# jsend-mw [![NPM](https://img.shields.io/npm/v/@zishone/jsend-mw)](https://www.npmjs.com/package/@zishone/jsend-mw) [![Build](https://github.com/zishone/jsend-mw/workflows/build/badge.svg)](https://github.com/zishone/jsend-mw/actions?query=workflow%3Abuild) [![Coverage](https://codecov.io/gh/zishone/jsend-mw/branch/main/graph/badge.svg?token=bP9dagN3Gs)](https://codecov.io/gh/zishone/jsend-mw) [![License](https://img.shields.io/github/license/zishone/jsend-mw)](https://github.com/zishone/jsend-mw/blob/master/LICENSE)
A middleware to add jsend helper functions to the response object.

## Installation
```shell
$ npm i @zishone/jsend-mw
```
## Usage
```javascript
const express = require('express');
const { jsend } = require('@zishone/jsend-mw');

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

See also the list of [contributors](https://github.com/zishone/jsend-mw/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/zishone/jsend-mw/blob/master/LICENSE) file for details.
