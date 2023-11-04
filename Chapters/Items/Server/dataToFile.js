const { json } = require('body-parser');
const fs = require('fs');
const Product = require('./models/productModel');

product_1 = new Product({
    name: "Carrot",
    rating: 4.5,
    price: 200,
    photoId: 1,
    specs: {type: "vegetable", color: "orange", name: "Carrot"},
});

product_2 = new Product({
    name: "Radish",
    rating: 4.5,
    price: 200,
    photoId: 2,
    specs: {type: "vegetable", color: "Crimson", name: "Radish"},
});

product_3 = new Product({
    name: "Eggplant",
    rating: 4.5,
    price: 200,
    photoId: 3,
    specs: {type: "vegetable", color: "purple", name: "Eggplant"},
});

product_4 = new Product({
    name: "Pumpkin",
    rating: 4.5,
    price: 200,
    photoId: 4,
    specs: {type: "vegetable", color: "orange", name: "Pumpkin"},
});

product_5 = new Product({
    name: "Potato",
    rating: 4.5,
    price: 200,
    photoId: 5,
    specs: {type: "vegetable", color: "yellow", name: "Potato"},
});
product_6 = new Product({
    name: "Pepper",
    rating: 4.5,
    price: 200,
    photoId: 6,
    specs: {type: "vegetable", color: "green", name: "Pepper"},
});
product_7 = new Product({
    name: "Cucumber",
    rating: 4.5,
    price: 200,
    photoId: 7,
    specs: {type: "vegetable", color: "green", name: "Cucumber"},
});
product_8 = new Product({
    name: "Tomato",
    rating: 4.5,
    price: 200,
    photoId: 8,
    specs: {type: "vegetable", color: "red", name: "Tomato"},
});

productsArray = [product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8];

jsonData = JSON.stringify(productsArray);

console.log(jsonData);

fs.writeFileSync(`${__dirname}/public/products/data.json`, jsonData);