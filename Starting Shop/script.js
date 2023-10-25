// let counter = document.querySelector('.numOfItems[id=\'1\']');
// let counter = findCounter(2);

let counterArray = [11, 12, 10]

displayCounter(1);
displayCounter(2);
displayCounter(3);

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
    counter.textContent = getCounterValue(id);
}
function findCounter(id){
    validateID(id, "number");

    let counter = document.querySelector(`.numOfItems[id=\'${id}\']`);
    if(counter == null) throw new Error(`Can't find this counter [id=${id}].`);
    console.log("content: " + counter.textContent);

    return counter;
}

function validateID(id, type){
    if(typeof(id) != type) throw new TypeError(`id must be a string! ${(typeof(id)).toString().charAt(0).toUpperCase() + (typeof(id)).toString().slice(1)} is an unsupported type!`);
}
