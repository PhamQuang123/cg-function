const table = document.getElementById("tb-content");
const btnAdd = document.getElementById("btn-add");
const showCRUD = document.getElementById("show-CRUD");
const inputName = document.getElementById("inp-name");
const inputPrice = document.getElementById("inp-price");
const inputCategory = document.getElementById("inp-category");
const clickMe = document.getElementById("click-me");
const fClose = document.getElementById("f-close");
const searchInp = document.getElementById("search-inp");
const searchBtn = document.getElementById("search-btn");
const sortPrice = document.getElementById("sort");

let check = false;
let indexEdit = 0;
let checkSort = true;
const dataProducts = () => {
    return JSON.parse(localStorage.getItem("Products")) || [];
};
if (dataProducts() !== []) {
    displayData(dataProducts());
}
clickMe.addEventListener("click", (e) => {
    let listProduct = dataProducts();
    // e.preventDefault();
    if (showCRUD.classList.contains("show")) {
        showCRUD.classList.remove("show")
    }
    if (check) {
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

    } else {
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
    displayData(listProduct);
})

function displayData(productData) {
    table.innerHTML = ``;
    for (let i = 0; i < productData.length; i++) {
        let product = productData[i];
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>
        <button  onclick="editProduct(${i})" class="btn btn-outline-warning btn-crud">Edit</button>
        <button  onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-crud">Delete</button>
        </td>
        `
        table.appendChild(tr);
    }
}

fClose.addEventListener("click", () => {
    if (showCRUD.classList.contains("show")) {
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
btnAdd.addEventListener("click", () => {
    inputName.value = "";
    inputPrice.value = "";
    inputCategory.value = "";
    clickMe.innerHTML = "Add";
    if (!showCRUD.classList.contains("show")) {
        showCRUD.classList.add("show")
    }
})

function editProduct(index) {
    if (!showCRUD.classList.contains("show")) {
        showCRUD.classList.add("show")
    }
    let listProduct = dataProducts();
    let product = listProduct[index];
    inputName.value = product.name;
    inputPrice.value = product.price;
    inputCategory.value = product.category;
    clickMe.innerHTML = "Update";
    check = true;
    indexEdit = index;
}

function deleteProduct(index) {
    let listProduct = dataProducts();
    listProduct.splice(index, 1);
    localStorage.setItem("Products", JSON.stringify(listProduct));
    displayData(listProduct);
}

searchBtn.addEventListener("click", () => {
    searchProduct()
    console.log(2);
});

function searchProduct() {
    let productData = dataProducts();
    let listSearch = [];
    let searValue = searchInp.value;
    for (let i = 0; i < productData.length; i++) {
        let product = productData[i];
        if (product.name == searValue || product.category == searValue) {
            listSearch.push(product);
        }
    }
    searchInp.value ="";
    displayData(listSearch);
}

sortPrice.addEventListener("click", () => {
    let listProducts = dataProducts();
    let list = [];
    if (checkSort){
        for (let i = 0; i < listProducts.length - 1; i++) {
            for (let j = i + 1; j < listProducts.length; j++) {
                if (parseInt(listProducts[i].price) > parseInt(listProducts[j].price)) {
                    let temp = listProducts[i];
                    listProducts[i] = listProducts[j];
                    listProducts[j] = temp;
                }
            }
        }
        checkSort = false;
    }else{
        for (let i = 0; i < listProducts.length - 1; i++) {
            for (let j = i + 1; j < listProducts.length; j++) {
                if (parseInt(listProducts[i].price) < parseInt(listProducts[j].price)) {
                    let temp = listProducts[i];
                    listProducts[i] = listProducts[j];
                    listProducts[j] = temp;
                }
            }
        }
        checkSort = true;
    }
    list = listProducts;
    displayData(list);
})

