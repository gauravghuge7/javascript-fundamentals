let map = new Map();

console.log(map.size);

let arr = [
    [1,'mithun'],
    [1,'alka'],
    [3,'prabhir'],
    [4,'shivam'],
    [5,'vinay']

]

arr.map((arrayitems)=> {
console.log( map.set(arrayitems[0],arrayitems[1]) ) ;
})

