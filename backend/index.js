const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const login = require('./api/login');
const getProducts = require('./api/getProducts');
const getProductById = require('./api/getProductById');
const createProduct = require('./api/createProduct');
const updateProduct = require('./api/updateProduct');
const deleteProduct = require('./api/deleteProduct');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});
app.get('/login', login);
app.get('/products', getProducts);
app.get('/products/:id', getProductById);
app.post('/products', createProduct);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});