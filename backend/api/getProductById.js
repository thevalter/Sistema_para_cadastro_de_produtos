const pool = require('./config');

const getProductById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

module.exports = getProductById;