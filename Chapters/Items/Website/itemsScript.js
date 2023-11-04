import { Item } from './Item.js';
// const itemEl =
//     `<div class="item">
//         <img src = "carrot.png" id="itemImage" width="150px"></img>
//         <div class= "itemName">Carrot</div>
//         <button class="openItem">Open</button>
//     </div>`;

const itemList = document.querySelector('.itemList');
// let el = document.createElement('div');
// el.innerHTML = itemEl;
// let imageOfElement = el.querySelector('#itemImage');
// imageOfElement.src = "http://localhost:3006/api/v1/products/photo/1";
// itemList.appendChild(el);



// export class Item{
//     get itemPattern(){return `
//     <div class="item">
//         <img src = "carrot.png" id="itemImage" width="150px"></img>
//         <div class= "itemName">Carrot</div>
//         <button class="openItem">Open</button>
//     </div>`};
//     set itemPattern(value){
//         throw Error(`Trying to set a new value to the constant itemPattern, value: "${value}".`);
//     };

//     element;

//     constructor(itemData){
//         this.element = this.createItem();

//         if(!itemData) return;
//         this.setItemData(itemData)
//     }

//     setItemData(itemData){
//         this.setName(itemData.name);
//         console.log(itemData.photoId);
//         console.log(`http://localhost:3006/api/v1/products/photo/${itemData.photoId}`);
//         this.setImage(`http://localhost:3006/api/v1/products/photo/${itemData.photoId}`);
//     }
//     setName(name){
//         const nameField = this.element.querySelector('.itemName');
//         nameField.textContent = name;
//     }

//     setImage(url){
//         const image = this.element.querySelector('#itemImage');
//         image.src = url;
//     }

//     createItem(){
//         let el = document.createElement('div');
//         el.innerHTML = this.itemPattern;
//         return el;
//     }

//     // createItem(itemData){
//     //     el = createItem();
//     //     setItem(el, itemData);

//     //     return el;
//     // }
// }



// class Test{
//     get constVar(){
//         return "hi";
//     }
//     set constVar(value){
//         throw Error(`Trying to set a new value to the constant constVar, value: "${value}".`);
//     }
// }
// let test = new Test();
// console.log(test.constVar);
// test.constVar = "bye";
// console.log(test.constVar);

getImageFromServer(setAllItems);

function setAllItems(itemsData){
    for(let i = 0; i < itemsData.length; i++){
        let itemData = itemsData[i];
        let item = new Item();
        item.createItem();
        item.setItemData(itemData);

        itemList.appendChild(item.element);
    }
}

async function getImageFromServer(callback){
    const url = 'http://localhost:3006/api/v1/products';
    const respose = await fetch(url);
    let dataJson = await respose.json();
    console.log(dataJson);
    let data = dataJson.data.productsData;
    let products = JSON.parse(JSON.stringify(data));

    callback(products);
}
