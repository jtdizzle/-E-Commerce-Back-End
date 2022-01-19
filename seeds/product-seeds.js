const { Product } = require('../models');

const productData = [
  {
    product_name: 'Simple T-Shirt',
    price: 15.99,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: 'Tennis Shoes',
    price: 80.0,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'Baseball Cap',
    price: 25.99,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Music Record',
    price: 15.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'Shorts',
    price: 19.99,
    stock: 20,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
