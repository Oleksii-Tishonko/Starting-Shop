const { json } = require('body-parser');
const fs = require('fs');

counterArray = [10, 10, 10];
let jsonData = JSON.stringify(counterArray);

console.log(jsonData);

fs.writeFileSync(`${__dirname}/data.json`, jsonData);