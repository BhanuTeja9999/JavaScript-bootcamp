function tellFortune() {
    //var
    //let
    //const

    let favColor = document.getElementById("favColor").value;
    let career;

    if (favColor ==="red") {

        career = "You might be a passionate leader"

    }
    else if (favColor==="green") {
        career = "The world of creativity awaits you"
    }
    else if (favColor==="blue") {
        career = "You have a potential of being problem solver"
    }
    else{
        career= "The future holds many exciting stuff for you"
    }


    document.getElementById("fortune").innerHTML=career;
}

const a =100;
const c =100;
const b ='100';
//loose equality
console.log(a==b)
//strict equality
console.log(a===b)
