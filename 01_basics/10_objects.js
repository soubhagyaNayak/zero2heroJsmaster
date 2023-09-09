// const tinderUser={}

// tinderUser.id="123abc"
// tinderUser.name="sammy"
// tinderUser.isLoggedIn=false

// console.log(tinderUser)


const obj1={1:"a",2:"b",3:"c"}

const obj2={1:"a",2:"b",4:"c"}

// const obj3=Object.assign(obj1,obj2)

// console.log(obj3)

const obj3={...obj1,...obj2}
console.log(obj3)

