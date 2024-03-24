class ListProducts {
    listProducts;

    constructor(listProducts) {
        this.listProducts = listProducts;
    }

    addProduct(newProduct) {
        return this.listProducts.push(newProduct);

    };

    // editProduct(id, inpName, inpPrice) {
    //     let list = this.listProducts;
    //     console.log(inpName)
    //     let index = this.findIndexById(id);
    //     inpName.value = list[index].getName();
    //     inpPrice.value = list[index].getPrice();
    //     // list[index].setName(inpName.value);
    //     // list[index].setPrice(inpPrice.value);
    //     console.log(list)
    // };

    deleteProduct(id) {
        let index = this.findIndexById(id);
        if (index >= 0) {
            return this.listProducts.splice(index, 1);
        } else {
            console.log("Sản phẩm không tồn tại");
        }
    };

    display(listData) {
        listData.innerHTML = ``;
        for (let i = 0; i < this.listProducts.length; i++) {
            let li = document.createElement("li");
            let product = this.listProducts[i];
            li.innerHTML = `
               ID: ${product.id}<br>
               Name: ${product.name}<br>
               Price: ${product.price}<br>
        <button onclick="editProductById(${product.id})">Edit</button>
        <button onclick="removeProduct(${product.id})">Delete</button>
        `
            listData.appendChild(li);
        }
    };

    findIndexById(id) {
        let list = this.listProducts;
        for (let i = 0; i < list.length; i++) {
            if (id == list[i].id) {
                return i;
            }

        }
        return -1;
    }
}
