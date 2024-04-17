const sum = (x,y) => {
     console.log(`adding ${x} and ${y}`)
     return x + y;

}

console.log(sum(4,5))




let x  = function () {
    console.log(" hi function ");
}
x();


// immediate function 

(function exe() {
    console.log(" this is the immediate function ");
})();

(
    function ex1(y) {
        console.log(y*y);
    }
)(8);
