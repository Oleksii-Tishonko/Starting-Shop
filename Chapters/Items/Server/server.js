const mongoose = require('mongoose');

const app = require('./app');


const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3006;

app.listen(3006, () => {
    console.log(`App running on port ${3006}.`);
});