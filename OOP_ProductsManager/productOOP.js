// const inpName = document.getElementById("inp-name");
// const inpPrice = document.getElementById("inp-price");

class ProductOOP {
    id;
    name;
    price;


    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    setId(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setPrice(price){
        this.price = price;
    }
}

