  const friend = ['Tanishq','Vaishnavi','Rabiya','Riya'];
  const section = ['3B','3A','4A','4B'];

  // if I will push sectoion array into friends array the o/p will be
  // friends.push(section);
  // console.log(friend); 
  // it will show that the section is added as a single component in the friend

  const result=friend.concat(section);
  //console.log(result);   // concat returns new array
  const newres=[...friend,...section];
  //console.log(newres);  // this is the spread operator method
 
  const Arr1 = [1,2,3,4,5,6,7,8,[23,56,[67]]];
  console.log(Arr1.flat(Infinity));
   //console.log(Arr1);
   // it gives the flat array with dept
   console.log(Array.isArray("Vaishanvi"));
  
   console.log(Array.from("Vaishnavi"));
  //  it converts the string into Array
   console.log(Array.from({name:"Vaishnavi"}));
    // if it does not work it will return the empty array


  let score1=200;
  let score2=300;
  let score3=400;

  // console.log(Array.of(score1,score2, score3));
  // it converts the multiple number valur into array

