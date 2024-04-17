let object1 = { 
    id: 23,
    name: "gaurav",
    surname: "ghuge",
    salary: 1000000,
}

console.log(object1);

function object2(i,n,s) {
    this.id=i,
    this.name=n,
    this.salary=s;
}

const e = new object2(23, "army", 20000);

console.log(e);