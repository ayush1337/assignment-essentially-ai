// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-credentials', true);
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, UPDATE'
    );
    next();
});

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.enable('trust proxy');

const API_KEY = process.env.API_KEY;
app.post('/api/fetchStockData', async (req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
    try {
        const URL = `https://api.polygon.io/v1/open-close/${req.body.symbol}/${req.body.date}`;
        const stockResponse = await axios.get(URL, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        const { open, high, low, close, volume } = stockResponse.data;

        const data = {
            open,
            high,
            low,
            close,
            volume,
        };

        res.status(200).json(data);
    } catch (err) {
        res.status(err.response.status).json(err.message);
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
