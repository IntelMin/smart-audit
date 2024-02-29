const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/live/:address', async (req, res) => {
  const address = req.params.address;
  //   console.log('token live request: ', address);

  const url = `https://api.dexscreener.com/latest/dex/tokens/${address}`;

  try {
    const response = await axios.get(url);
    const filedata = response.data;
    console.log(filedata);
    const pair = filedata['pairs'][0];
    if(pair.chainId ==="pulsechain"){
      const defillama_res = await axios.get(`https://coins.llama.fi/prices/current/ethereum:${address},?searchWidth=4h`);
      const defillama_data = defillama_res.data.coins;
      console.log( defillama_data[`ethereum:${address}`]);
      delete pair['priceUsd'];
      pair['priceUsd'] = defillama_data[`ethereum:${address}`].price;
    }
    // remove unnecessary fields
    delete pair['url'];

    res.status(200).send(pair);
  } catch (error) {
    res.status(404).send('Error fetching data');
  }
});

module.exports = router;
