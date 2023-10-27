// let counter = document.querySelector('.numOfItems[id=\'1\']');
// let counter = findCounter(2);




// let counterArray = [11, 12, 10]
var counterArray = getCountersData(loadCounters);
console.log(counterArray);

function loadCounters(countersArray){
    counterArray = countersArray;
    displayCounter(1);
    displayCounter(2);
    displayCounter(3);
}

// counterArray = [10, 10, 10]
// console.log(counterArray);
// setCountersData(counterArray);
// console.log(counter != null);

// console.log(counter.textContent);

function increaseCounter(id){
    
    console.log("given id: " + id);
    addToCounter(id, 1);
}
// increaseCounter(1);
// increaseCounter("hello");

function decreaseCounter(id){
    console.log("given id: " + id);
    addToCounter(id, -1);
}

function addToCounter(id, value){
    _val = getCounterValue(id);
    setCounterValue(id, _val+value);
    displayCounter(id);
    setCountersData(counterArray);
}

function setCounterValue(id, value){
    if(value < 0) return;
    if(id > counterArray.length || id <= 0) throw TypeError(`Don't have value for this counter [${id}]`);
    counterArray[id-1] = value;
}

function getCounterValue(id){
    // console.log(counterArray.length);
    if(id > counterArray.length || id <= 0) throw TypeError(`Don't have value for this counter [${id}]`);
    return counterArray[id-1];
}

function displayCounter(id){
    counter = findCounter(id);
    console.log(getCounterValue(id));
    counter.textContent = getCounterValue(id);
}
function findCounter(id){
    validateID(id, "number");

    let counter = document.querySelector(`.numOfItems[id=\'${id}\']`);
    if(counter == null) throw new Error(`Can't find this counter [id=${id}].`);
    // console.log("content: " + counter.textContent);

    return counter;
}

function validateID(id, type){
    if(typeof(id) != type) throw new TypeError(`id must be a string! ${(typeof(id)).toString().charAt(0).toUpperCase() + (typeof(id)).toString().slice(1)} is an unsupported type!`);
}




// const url='http://localhost:3005/counter';


async function getCountersData(callback) {
  const url='http://localhost:3005/counter';
  const response = await fetch(url);
  let countersData = await response.json();

  const countersString = countersData.data.counters.counters; // Get the counters string
  let countersArray = JSON.parse(countersString);

  console.log(countersArray);

  console.log(countersData);

  callback(countersArray);
}

async function setCountersData(data){
    countersData = {
  counters: data,
};
  const url='http://localhost:3005/counter';
  await fetch(url, 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(countersData)
    });
}