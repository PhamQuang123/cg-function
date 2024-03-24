const inputName = document.getElementById("inp-name");
const inputPrice = document.getElementById("inp-price");
const inputCategory = document.getElementById("inp-category");
const clickMe = document.getElementById("click-me");
const listData = document.getElementById("ul-list");
let check = false;
let indexEdit = 0;
const dataProducts = () =>{
    return  JSON.parse(localStorage.getItem("Products")) || [];
};
console.log(dataProducts());
if(dataProducts() !== []){
    displayData();
}
clickMe.addEventListener("click", (e) => {
    let listProduct = dataProducts();
    // e.preventDefault();

    if (check){
        let nameValue = inputName.value;
        let priceValue = inputPrice.value;
        let categoryValue = inputCategory.value;
        let newProduct = {
            id: listProduct[indexEdit].id,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        };
        listProduct[indexEdit] = newProduct;
        check = false;
    }else{
        let idValue = inputId();
        let nameValue = inputName.value;
        let priceValue = inputPrice.value;
        let categoryValue = inputCategory.value;
        let newProduct = {
            id: idValue,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        };
        listProduct.push(newProduct);
    }
    localStorage.setItem("Products", JSON.stringify(listProduct));
    displayData();
})

function displayData() {

    let listProduct = JSON.parse(localStorage.getItem("Products"));

    listData.innerHTML =``;
    console.log(listData)
    for (let i = 0; i < listProduct.length; i++) {
        let li = document.createElement("li");
        let product = listProduct[i];
        li.innerHTML = `
        ID: ${product.id}<br>
        Name: ${product.name}<br>
        Price: ${product.price}<br>
        Category: ${product.category}<br>
        <button onclick="editProduct(${i})">Edit</button>
        <button onclick="deleteProduct(${i})">Delete</button>
        `
        listData.appendChild(li);
    }

}

fClose.addEventListener("click", () => {
    if (showCRUD.classList.contains("show")){
        showCRUD.classList.remove("show")
    }
})
let inputId = () => {
    let listProduct = dataProducts();
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

function deleteProduct(index) {
    // debugger;
    let listProduct = dataProducts();
    listProduct.splice(index, 1);
    localStorage.setItem("Products", JSON.stringify(listProduct));
    // displayData();
}

function editProduct(index){
    let listProduct = JSON.parse(localStorage.getItem("Products"));
    let product = listProduct[index];
    inputName.value = product.name;
    inputPrice.value = product.price;
    inputCategory.value = product.category;
    clickMe.innerHTML = "Update";
    check = true;
    indexEdit = index;
    console.log(   inputCategory.value)
}