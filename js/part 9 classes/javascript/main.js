
class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 40000);
const product2 = new Product("Pants", 25000);
const product3 = new Product("Underwear", 250000);

const total = product3.calculateTotal(salesTax)
console.log(`Total price (with tax): ${total}`)