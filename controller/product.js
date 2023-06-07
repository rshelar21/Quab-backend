const productModel = require('../model/product');



const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({message : "Get all products", products});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {getProducts}