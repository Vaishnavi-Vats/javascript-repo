// singleton

// object litrals 
 
const mySym = Symbol("key1");

const jsUser = {
    "firstName" : "Tanishq",
    [mySym] : "my_key",
    name : "vaishnavi",
    age : 21,
    location : " Greater noida",
    email : "vaish3663@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday","Thusday"]
}
// console.log(jsUser.email);  // we can acess in this way too
// console.log(jsUser["email"]);  // proper way this one is more appropriate 
// console.log(jsUser["firstName"]);
// console.log(typeof jsUser.mySym); // it show sting bcz incoorct syntax
// console.log(typeof jsUser[mySym]);

jsUser.email = "vaish3663@gmail.com";
// console.log(jsUser);
// Object.freeze(jsUser);   // this will freeze the chnges in values .
jsUser.email = "vaish567@gmail.com";  
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello js user");    
}
jsUser.greetingsTwo = function(){
    console.log(`Hello Js User,${this.firstName}`);  //we can use this for the refrence purpose 
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());