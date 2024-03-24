
let objListProducts = new ListProducts([]);

const inpName = document.getElementById("inp-name");
const inpPrice = document.getElementById("inp-price");
const listData = document.getElementById("ul-list");

// const inputCategory = document.getElementById("inp-category");
const clickMe = document.getElementById("click-me");

// debugger;
if (objListProducts.listProducts.length >= 0){
    objListProducts.display(listData);

}

let check = false;
let index = -1;
clickMe.addEventListener("click", () => {

    if (check){
        let product = objListProducts.listProducts[index];
        console.log(product)
        let nameVlue = inpName.value;
        let priceValue = inpPrice.value;
        product.setName(nameVlue);
        product.setPrice(priceValue);
        check = false;

        inpName.value = "";
        inpPrice.value = "";
        clickMe.innerHTML = "Add";

    }else{
        let idValue = inputId();
        let nameVlue = inpName.value;
        let priceValue = inpPrice.value;
        let newProduct = new ProductOOP(idValue, nameVlue, priceValue);
        objListProducts.addProduct(newProduct);
        inpName.value = "";
        inpPrice.value = "";
    }
    objListProducts.display(listData);

})

function removeProduct(id){
    objListProducts.deleteProduct(id);
    objListProducts.display(listData);
}
function editProductById(id){
    clickMe.innerHTML = "Update";
    // objListProducts.editProduct(id, inpName, inpPrice);
    check = true;
    index = objListProducts.findIndexById(id);
    let product = objListProducts.listProducts[index];
    inpName.value = product.getName();
    inpPrice.value = product.getPrice();
}
let inputId = () => {
    let listProduct = objListProducts.listProducts;
    let maxId = 0;
    if (listProduct.length == 0) {
        maxId = 0;
    } else {
        for (let i = 0; i < listProduct.length; i++) {
            if (maxId < listProduct[i].id) {
                maxId = listProduct[i].id;
            }
        }
    }
    maxId += 1;
    return maxId;
}