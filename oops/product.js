class Product {
    
    // properties --> variables --> data member 

    name; 
    price;
    rating;

    //behaviour --> functions --> member functions 

    display() {
        console.log(" displaying current product");
    }
}

const p = new Product();

console.log(p);
p.display();