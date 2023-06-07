const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const db = require('./config/mongoDB')
require('dotenv').config({ path: '.env'});
const productRouter = require('./routes/product');

app.use(cors());
app.use(express.json());    // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // To parse the incoming requests with urlencoded payloads

app.use('/product', productRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})