const pool = require('./config');

const login = (req, res) => {

    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        };
        res.status(200).json(results.rows);
    });
};

module.exports = login;