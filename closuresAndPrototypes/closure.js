const errorMessage = ' file not found'

setTimeout(function callback() {
    console.log(errorMessage);
}, 2000)


let pageCount = 0;

const items = [2,3,4,5,6,];

items.forEach(iterator = (num) => {
    pageCount++
    console.log(num)
})

console.log("count ", pageCount);
