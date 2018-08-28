const express = require('express');
const https = require("https");

const app = express();
const port = process.env.PORT || 5000;
//const url = 'https://www.cryptocompare.com/api/data/coinlist';

/*
app.get(url, (req, res) => {
  res.send({ express: "ok" });
});
*/

//app.listen(port, () => console.log(`Listening on port ${port}`));

/*
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=0&limit=5000&convert=USD,EUR');
xhr.setRequestHeader('X-CMC_PRO_API_KEY', 'aad925c0-a945-469f-bce2-632f03fa02f8');
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');

xhr.onreadystatechange = function handler() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();

app.get(xhr.response, (req, res) => {
  res.send({ express: 'ok' });
});
*/



app.listen(port, () => console.log(`Listening on port ${port}`));


