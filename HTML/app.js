// let a = +prompt("NHập số a:");
// let b = +prompt("Nhập số b:");
// function getAB(a,b){
//     for (let i = a; i <= b ; i++) {
//         console.log(i);
//     }
// }
// getAB(a,b);
// function sum(a,b){
//     let sum = 0;
//     for (let i = a; i <= b ; i++) {
//         sum += i;
//     }
//     return sum ;
// }
//
// console.log("tổng a-b là: " + sum(a,b));

// Kiểm tra số nguyên tố
// let number = +prompt("Nhập số cần kểm tra:");
// let check = 0;
// function isPrime(a){
// if (a < 2){
//     console.log(`Số ${a} không phải số nguyên tố `);
// }else if(a === 2) {
//     console.log(`Số 2 là số nguyên tố`);
// }else{
//     for (let i = 2; i < a; i++) {
//         if (a % i == 0 ){
//             check++;
//         }
//     }
// }
// if (check == 0){
//     console.log(`Số ${a} là số nguyên tố`);
// }else{
//     console.log(`Số ${a} không phải số nguyên tố`);
// }
// }
// isPrime(number);

//Chuyển đổi meter và feet
// let inputMeter = document.getElementById("meter");
// let inputFeet = document.getElementById("feet");
// let convertF = document.getElementById("btn1");
// let convertM = document.getElementById("btn2");
//
// convertF.addEventListener("click",(e)=> {
//     e.preventDefault();
//     let meterValue = inputMeter.value;
//     let ressult = meterValue * 3.279;
//     inputMeter.value  = "";
//     console.log(ressult);
//
// })
//
// convertM.addEventListener("click", (e) => {
//     e.preventDefault();
//     let feetValue = inputFeet.value;
//     let result = feetValue * 0.305;
//     inputFeet.value = "";
//     console.log(result);
// })

// kiểm tra ký tự nập vào phải ký tự số hay không
// let inputText = prompt("Nhập ký tự cần kiểm tra:");
// function check(a){
//     if (isNaN(a)){
//         console.log(false)
//     }else{
//         console.log(true)
//     }
// }
// check(inputText);


// Quản lý sản phẩm
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
    displayData();
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