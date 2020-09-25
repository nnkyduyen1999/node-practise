const db = require('../db');

module.exports.products = (req, res) => {
    const products = db.get('products').value();
    let productsPerPage = 8;
    let pageNum = parseInt(req.query.page) || 1;
    let start = (pageNum - 1) * productsPerPage;
    let end = pageNum * productsPerPage;
    res.render('./products/index', {
        allProducts: products.slice(start, end),
    });
};