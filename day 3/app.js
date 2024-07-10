let student = { firstName: "bharat", lastname: "sanjay" }

let person = new Object();
person.firstName = "Bharat";
person.lastname = "Sanjay";

console.log(person.lastname)
console.log(person["lastname"])
let car = ["volvo",
    "bmw",
    "hyundai",
    "tata",
    "kia",
    "skoda"]
car[0] = "honda"

delete car[0];
car.push("xyz")
car.pop()
car.shift()//removing the first element 
car.unshift("Maruthi suzuki")//Inserts new element at the beginnig
car.slice(1, 2);
//Slice: Method in JavaScript that extracts a section of an array and returns it as a new array without modifying the original array.

//Splice: Method in JavaScript that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let array2 = [1, 2, 3, 4, 5];
let splicedArray = array2.splice(2, 2, 6, 7); // Removes 2 elements starting from index 2 and adds elements 6 and 7
console.log(splicedArray);

//Array Constructor 
const myMonths = new Array('January', 'February', 'March')
let text = ""
for (let i = 0; i < car.length; i++) {
    text += car[i] + "<br>";

}
document.getElementById("carsDisplay").innerHTML = text;



