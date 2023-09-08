let value=3
let negvalue=-value
console.log(negvalue)

console.log(2**3)

//Adding two string

let str1="Bibek"
let str2="Ghosh"
let str3=str1+str2
console.log(str3)

//null is an object


//first string then all other values are treated as string but is first number then it will treated as number
console.log("1"+2)
//it gives the value 12
console.log(1+"2")
//it gives value 12
console.log("1"+2+2)
//it will gives avalue 122
console.log(1+2+"2")
//it gives value 32

//it will gives value one
console.log(+true)


//it will gives value  zero
console.log(+false)

console.log(+" ")
//it gives value zero

console.log(" ")
//it gives value empty

console.log(null>=0)

//prifix and postfix

let gameCounter=100
gameCounter++;
console.log(gameCounter);

//=== NOT ONLY CHECKING THE VALUE BUT ALSO CHECKING THE DATATYPES


// DATATYPES ------ PRIMITIVE ------ NON-PRIMITIVE

// 7 TYPES  ---- 1)STRINGS 2) NUMBER 3) BOOLEAN 4) SYMBOL 5) UNDEFINED 6) BIGINT 7)NULL

// NON -PRMITIVE
//ARRAY , OBJECTS, 

const id= Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId)