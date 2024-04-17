
try {

    
function Product (n,p,r) {

    this.name = n;
    this.price = p;
    this.rating = r;
}

const d = new Product("macbook", 150000, 4);
const oneplus = new Product("oneplus", 150000, 4);
console.log(d)
console.log(oneplus);


let x = {
    p: Product
}

x.p("airdops", 150000, 7);
console.log(x);


} 

catch (error) {
    console.log("this is the error "+error);
}








