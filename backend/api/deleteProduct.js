const pool = require('./config');

const deleteProduct= (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        };
        response.status(200).send(`Product deleted with ID: ${id}`);
    });
};

module.exports = deleteProduct;