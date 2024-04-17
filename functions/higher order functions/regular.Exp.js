let pattern = 'pw';

let regExOne = new RegExp(pattern);

let flag = 'gi'


let reg_ex_two = new RegExp (pattern, flag);

let reg_ex_three = /pw/gi


const strToCheck = "  pw is the course of pw live .com  this is the pw cources ";

const result = reg_ex_three.test(strToCheck);

// console.log(result)


const anotherResult = strToCheck.match(reg_ex_three, '/pw/gi')
// console.log(anotherResult)

const another = strToCheck.match(strToCheck, '/PW/g');

// console.log(another)




const oneMoreResult = strToCheck.replace(reg_ex_three, 'p_w')

console.log(oneMoreResult)


const webUrl = "https://pwskills.com/hitesh%20chauhary";

const usableUrl = webUrl.replace(/%\d\d/, "-");

console.log(usableUrl);