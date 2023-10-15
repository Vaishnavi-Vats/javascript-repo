// IMMIDIATLY INVOKED FUNCTION EXPRESSION

(function chai(){
// name iifi
console.log(`DB Connected`);  // to stop the pollution from global scope
})();

// ()()--- normal function

( ()=>{
    // unnamed lifi
    console.log(` DB Connec ted Two`);

})()