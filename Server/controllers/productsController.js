const Product = require('../models/productModel');
const fs = require('fs');
const path = require('path');


exports.getAllProducts = async (req, res) => {
  dataPath = `${__dirname}/../public/products/data.json`;
  dataPath = path.normalize(dataPath);

  const data = JSON.parse(fs.readFileSync(dataPath));
  console.log(data);

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        productsData: data,
      },
    });
}

exports.getImage = async (req, res) =>{
  res.set({'Content-Type': 'image/png'});
  res.setHeader('Content-Type', 'image/png');
  
  imageId = req.params.id;
  imagePath = `${__dirname}/../public/products/photos/${imageId}/photo.png`;
  // imagePath = path.join(__dirname, '/../public/products/photos/1/photo.png')
  imagePath = path.normalize(imagePath);
  // path = "L:/платформы/проекты/WebSites/Starting-Shop/Server/public/products/photos/1/photo.png"
  console.log("path: " + imagePath);
  res.sendFile(imagePath);
  // const photo = fs.readFileSync(`${__dirname}./../products/photos/1/photo.png`, 'utf-8')
  
  // res.end(photo);
  // response.body.pipe(photo);
}