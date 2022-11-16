const pool = require('./config');

const createProduct = (request, response) => {
    const { product, brand, price, amount} = request.body;

    pool.query('INSERT INTO products (product, brand, price, amount) VALUES ($1, $2, $3, $4) RETURNING *', [product, brand, price, amount], (error, results) => {
        if (error) {
            throw error;
        };
        response.status(201).send(`Product added with ID: ${results.rows[0].id}`);
    });


    return response.status(401);
};

module.exports = createProduct;