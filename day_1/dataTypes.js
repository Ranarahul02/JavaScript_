// types of data types in javascript

// Primitive(7) => number, bigInt, boolean, string, undefined, null, symbol

const accountName = "Rahul Rana" // String

let age = 19 // Number

let eligible = true; // Boolean

const accountId = 987725656345426878735564n; // BigInt

let caste; // Undefined

let weather = null; // Null

// let p = symbol("1220"); // Symbol

// console.table([accountName,age,eligible,accountId,caste,weather]);


// Non primitive => array, object, function

let arr = ["rahul","vikash","sonu","mohit"];
// console.log(arr);

let obj = {
    name: "Rahul",
    age: 18,
    caste: "Rana",
    marks: 98
}

// console.log(obj)

let f = function(){
    return 2+5
}
console.log(f())
