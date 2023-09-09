let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
//haar eak cheez date koa kuchh format mea convert kartaa haiii
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
const myDate2=new Date('20232-01-23')
console.log(myDate2.getTime())

// array

const myarr=[2,4,5,8,9]
// myarr.push(7)
// console.log(myarr)

//in the pop always the last value is removed
// myarr.pop([9])
// console.log(myarr)
//5 is added in the front
// myarr.unshift(5)
// console.log(myarr)
//first index value is removed
// myarr.shift()
// console.log(myarr)

// const ram=myarr.includes(5)
// console.log(ram)

//convert the whole array to a string
// const hare=myarr.join()
// console.log(hare)

// const krisha=myarr.slice(0,4)
// console.log(krisha)


//if we use splice then it will effect on the 
// const krishna=myarr.splice(3,5)
// console.log(krishna)
// console.log(myarr)

const marvel_heroes=["thor", "spiderman","ironman"]
const dc_heroes=["superman","flash","batman"]

//araay kea andaar array aagayaaa
// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes[3][1])

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);
// console.log([...marvel_heroes,...dc_heroes]);

// console.log(marvel_heroes)

const another_array=[2,4,5,,6,77]
 const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

//check it's array or not
console.log(Array.isArray("soubhagya"))

//string to arrray 
//everything in js is an object
const ram=Array.from("soubhagya")
console.log(typeof ram)


//in this way we also create an array
const value1 =100
const valu2=200
const value3=300
console.log(Array.of(value1,valu2,value3))