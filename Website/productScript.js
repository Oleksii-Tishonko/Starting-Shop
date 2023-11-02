// import { Item } from './Item.js';

async function getProductData(id, callback){
  const url = `http://localhost:3006/api/v1/products/${id}`;
  const response = await fetch(url);
  const dataJson = await response.json();
  const product = dataJson.data.product;
  console.log(product);

  callback(product);
}

function loadProductDataToPage(data){
  let name = document.querySelector('.productName');
  name.textContent = data.name;

  console.log(`http://localhost:3006/api/v1/products/photo/${data.photoId}`);
  let image = document.querySelector('.productImage');
  image.src = `http://localhost:3006/api/v1/products/photo/${data.photoId}`;
  

}

function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Get the value of the "exampleArg" parameter
var id = getParameterByName('id');

if (id) {
      // Use the parameter value in your script
    console.log('Product id:', id);
    getProductData(id, loadProductDataToPage);
} else {
    console.log('Product Id parameter not found.');
}

