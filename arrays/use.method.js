let a1 = [1,2,3,4,3,45,8];
let a2 = [644,644,544];

let a3 = a1.concat(a2);


console.log(a3);


let s = a3.join("  ");

console.log(s);

a3.reverse();

console.log(a3);

console.log(a3.indexOf(644));


let arr1 = [3,4,5,6,67,8];

console.log(arr1.slice(23,23));

console.log(arr1.slice(2, 3));

arr1.splice(2, 4, 11 );

console.log(arr1);
