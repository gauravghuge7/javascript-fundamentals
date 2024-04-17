const user = {
    name: 'top name',
    email: 'demo@gmail.com',

}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: true
}

const TaAssitant = {
    makeAssignment: "js Assignment",
    fullTime: true, 
    __proto__: teachingSupport   
}

// console.log(TaAssitant.isAvailable);

teacher.__proto__ =  user

/// latest javascript method for declaring the method 

Object.setPrototypeOf(teachingSupport, teacher);

console.log(teachingSupport.makeVideo);



String.prototype.truelength = () => {
    console.log(` True length is ${ this.trim().length}`);  /// errorable part in this line find this error
}

"hitesh.     ".truelength()
