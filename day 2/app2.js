//let x;
//console.log(`x is ${x}`)
//const a =100;
//a=500;
//console.log(a)
//const variable value cannot be changed its fixed
//var is for local and goal scope
// var number =50
// function print()
// {
//     var square = number * number
//     console.log(square)

// }
// console.log(number)
// let number =50

// function print(number)
// {
//     let square = number *number

//     if(number < 60)
//     {
//         var largerNumber =80
//         let anotherLargerNumber = 100
//         console.log(square)
//     }

//     console.log(largerNumber)
//     console.log(anotherLargerNumber)
// }
// print(50)
const a =100;
const c =100;
const b ='100';
//loose equality
console.log(`a == b is ${a == b}`)
//strict equality
console.log(a===b)
console.log(`a == b is ${a == b}`)
console.log(`a == c is ${a == c}`)
console.log(`a === c is ${a === c}`)

//Datatypes
//String , Number, BigInt ,Boolean,Undefined,Null,Symbol,Object
let t = true;
let u = "true"

//object
let student ={firstName: "Bhanu",lastname: "Teja"}

//array
let car =["volvo","bmw","hyundai","audi","porsche"]

let text = ""
for(let i =0;i< car.length;i++)
{
    text +=car[i] + "<br>";
}

document.getElementById("cardisplay").innerHTML = text;
