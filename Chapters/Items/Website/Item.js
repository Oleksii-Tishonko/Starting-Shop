export class Item{
    get itemPattern(){return `
    <div class="item">
        <img src = "carrot.png" id="itemImage" width="150px"></img>
        <div class= "itemName">Carrot</div>
        <form id="urlHandler" action="http://127.0.0.1:3000/OtherPages/product.html">
        <input type="hidden" id="productIdHolder"  name="id" value="" />
        <button class="openItem">Open</button>
        </form>
    </div>`};
    set itemPattern(value){
        throw Error(`Trying to set a new value to the constant itemPattern, value: "${value}".`);
    };

    element;

    constructor(itemData){
        this.element = this.createItem();

        if(!itemData) return;
        this.setItemData(itemData)
    }

    setItemData(itemData){
        this.setName(itemData.name);
        // console.log(itemData.photoId);
        // console.log(`http://localhost:3006/api/v1/products/photo/${itemData.photoId}`);
        this.setImage(`http://localhost:3006/api/v1/products/photo/${itemData.photoId}`);
        this.setButtonUrl(itemData._id);
    }
    setName(name){
        const nameField = this.element.querySelector('.itemName');
        nameField.textContent = name;
    }

    setImage(url){
        const image = this.element.querySelector('#itemImage');
        image.src = url;
    }

    createItem(){
        let el = document.createElement('div');
        el.innerHTML = this.itemPattern;
        return el;
    }
    setButtonUrl(productId){
        console.log(productId);
        let url = 'http://127.0.0.1:3000/OtherPages/product.html';

        console.log(url);
        let goToProduct = this.element.querySelector('#urlHandler');
        goToProduct.action = url;

        let productIdHolder = goToProduct.querySelector('#productIdHolder');
        productIdHolder.value = productId;
    }

    // createItem(itemData){
    //     el = createItem();
    //     setItem(el, itemData);

    //     return el;
    // }
}