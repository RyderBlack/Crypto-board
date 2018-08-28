const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&start=0&limit=10&cryptocurrency_type=tokens&convert=USD,BTC&key=aad925c0-a945-469f-bce2-632f03fa02f8';

app.get(url, (req, res) => {
  res.send({ express: res });
});

app.listen(port, () => console.log(`Listening on port ${port}`));