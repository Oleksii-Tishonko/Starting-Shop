const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.use(express.static('public'));

app.use(cors());

app.use('/api/v1/products', productRouter);

app.all('*', (req, res, next) =>{
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});

module.exports = app;