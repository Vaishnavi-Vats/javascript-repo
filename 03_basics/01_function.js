// function myName(){
//     console.log("V");
//     console.log("A");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("N");
//     console.log("A");
//     console.log("V");
//     console.log("I");

// }
 
//  let a=myName();
//  console.log(a);

function add( a, b){
return a+b;
}
add(34,56);
let c =add(34,67);
console.log(c);

function userLoginMessage(username){
    if (username===undefined){
        console.log("this is invalid")
    }
    return `This ${username} has logged in`
}

console.log(userLoginMessage());
// if we did not pass any string it will shown undefined
if ( userLoginMessage())
  console.log("please insert a valid string, this is not a valid sytax")
else

 console.log(userLoginMessage());






