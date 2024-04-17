class demo {
    name;
    price;
    rating;

    constructor(n,p,r) {
        
        this.name = n;
        this.price = p;
        this.rating = r;
        
    }

    display() {
        console.log(" displaying the product ",this)
    }

}


const d = new demo("Iphone", 100000, 5);
console.log(d);