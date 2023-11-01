changeTextForHeader("changed text");
getCountersData(changeTextForHeader);

function changeTextForHeader(text){
    const el = document.getElementById('test');
    el.textContent = text;
}

async function getCountersData(callback) {
  const url='http://localhost:3006/api/v1/products';
  const response = await fetch(url);
  let jsonData = await response.json();

  const jsonString = jsonData.data.message; // Get the counters string
//   let message = JSON.parse(countersString);
  let message = jsonString;

  console.log(message);

  console.log(jsonData);

  callback(message);
}