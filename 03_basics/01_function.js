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

 function calCartPrice(var1,var2,...num1){
  return num1
  
 }
//  console.log(calCartPrice(100,200,300,400));

 //... rest operator
 
 let user={
  username: "vaishnavi",
  price:79274026

 }
 function handleAnyObject(anyObject){
  console.log(`the username is ${anyObject.username} and the price is ${anyObject.price}`)
 }
   handleAnyObject(user);


   const array =[23,45,6346,47535,2352];
   function myArray(array){
    return array[0];

   }
   console.log( myArray(array));




