//we can declare variable by this
const score=600
console.log(score)

//by this way we can create a object
const balance=new Number(400000)

// console.log(balance)
//here we can convert the number into string,and by using length we can also check it's length
console.log(balance.toString().length)

//decimal number printed
console.log(balance.toFixed(2))




//INDIAN FORMAT 
console.log(balance.toLocaleString('en-IN'))

//-----------------------------math-------------------------------//
const poor= 4000.6789
//absolute value gives like -ve value to +ve value
console.log(Math.abs(-4))
//round of the number
console.log(Math.round(495.56))

//gives the upper value
console.log(Math.ceil(4.6))
//gives the lowest value
console.log(Math.floor(6.78))
//gives the maximum value
console.log(Math.max(3,5,7,8,9))
//gives the minimum value
console.log(Math.min(2,4,6,7,8))

//----- random()-----

console.log(Math.floor(Math.random()*10+1))

// randomly creating element between two number

let min=20;
let max=40;

console.log(Math.floor(Math.random()*(max-min+1)+min))