// In this we talk about local and global scope 

// var c = 300 ;    // in var case this will show diff value
let an = 300 ;     // global scope
if(true){
    let an = 10;
    const b = 20;
   //  console.log("Inner :" , an);   // block scope
} 
// console.log(an);    // show error
// console.log(b);    // show error
// console.log(c);    // do not show any kind of error 


function one (){
  const username = "Tani";
  function two() {
    const website = "insta"
    console.log(username);
  }
  // console.log(website);
  // two();
}
// one();

// if else example

{

}
// this  is the json format  of coading and it is called 







let a=45;
let b =89;
let c=30;

for(let i=0;i<10;i++){
    console.log(i)
    console.log(a+b);
  
    var v=56;
    let c=3656;
}

console.log(c);


function difference( a,b){
    let diff = b-a;
    return diff;
    
}
   let result = difference(89,78)
 console.log(result);
 // scope of variable
 // local scope= that can be access locally 
 // global scope = that can be access anywhere entire the code
 // fuction scope = variable that can be acess entire the function 
 // lexical scope=A variable defined outside a funxtion can be accesibe inside another function defined agter variable declaration
