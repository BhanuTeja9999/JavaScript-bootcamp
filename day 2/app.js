let x;
console.log(`x is ${x}`)
const a =100;
a=500;
console.log(a)
//const variable value cannot be changed its fixed
//var is for local and goal scope
// var number =50
// function print()
// {
//     var square = number * number
//     console.log(square)

// }
// console.log(number)
let number =50

function print(number)
{
    let square = number *number

    if(number < 60)
    {
        var largerNumber =80
        let anotherLargerNumber = 100
        console.log(square)
    }

    console.log(largerNumber)
    console.log(anotherLargerNumber)
}

print()