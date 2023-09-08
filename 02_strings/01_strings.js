//strings concatination ways


const name1="soubhagya"
const name2="ram"
console.log(name1 + name2)

//also we can used here string interpolation
console.log(`first name is ${name1} and the last name is ${name2}` + " hare krushnaa")
//it is more redable and reliable modern way to use js

//this is the one way we declared string
const myname="soubhagya"
console.log(myname.toLowerCase("soubhagya"))
console.log(myname.toUpperCase("soubhagya"))

//in the other hand we can also declared string
//in this form it stored in the object form
const mysurename=new String("bibek")
console.log(typeof mysurename)
//we can also measure length in this way
console.log(mysurename.length)
//it tells us that it is a object
//console.log(mysurename.__proto__)

//find the character's postion of a word
console.log(myname.charAt(3))

//it finds the index or position index number in the string 
console.log(myname.indexOf("o"))

//it gives a substring
console.log(myname.substring(0,4))


//it gives a piece of string value , first index number start with the given number but the last range selected will gives the previous number range
//here we add negative value also
console.log(myname.slice(0,6))

const value="      ranjan      "
//it will cut the starting space
console.log(value.trimStart())
//it will cut the end space 
console.log(value.trimEnd())
//it will cut the extra space on the both end
console.log(value.trim())

//it will gives that the value is present or not
console.log(myname.includes("soubhagya"))

//it will split one  value to three value by "-" 
const bibek="soubhagya-ranjan-nayak"
console.log(bibek.split("-"))
//it will change the first "-" to "+"
console.log(bibek.replace("-","+"))