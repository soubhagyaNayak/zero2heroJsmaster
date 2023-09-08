// // in early language , there we have to do something for reserve the memory and free the memory---as a programmer


// //stack ---primitive type

// //heap ---- reference type/non-primitive

// let myYouTubechannel="soubhagyarockstar"

// let newYoutubeChannel=myYouTubechannel;

// newYoutubeChannel="soubhagya"
// console.log(newYoutubeChannel)
// console.log(myYouTubechannel)

// in case of primitive datatypes it will only copy the value 
//so here value does not changes

//---- non-primitive datatypes

let userone={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo=userone

userTwo.email="soubhagya@gmail.com"
console.log(userone.email)

//here value changes because in case of non-primitive type/ reference type it gives a reference to that object