const Arr1 = [1,2,3,4,5,6,7,8,[23,56,[67]]];
console.log(Arr1.flat(Infinity));

const gitUser={}; // non singleton object

const regularUser ={
    email: "vaishnavisingh@gmail.com",
    name: {
       fullname:{
        firstname:"Vaisnavi",
        lastname:"Singh"

       }
    }
}

// console.log(regularUser.name.fullname.firstname); 
// we can crete objects under the object.(fully availability nesting).
// MergeOperation of Objects.

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
// const obj3={obj1,obj2}
// const obj3= Object 
const obj3={ obj1, obj2};
console.log(obj3);
// console.log(regularUser.fullname.UserFullName.LastName);   
// we can acces the objects in the objects.

const obj4 = {5:"a",6:"b"};
// const obj3 = {obj1,obj2};  // this shows the problems same as array.
// const obj3 = Object.assign({},obj1,obj2,obj4); //proper syntax {}-this work as a target
// const obj3 = {...obj1,...obj2,...obj4}; // most use full spread operator.
//console.log(obj3);

// when values comes from database ...

const users = [
    {
        id : "1",
        email : "xyx@gmail.com"
    },
    {
        id : "2",
        email : "xyz@gmail.com"
    },
    {
        id : "3",
        email : "xyb@gmail.com"
    }
]
// console.log(users[1].email);
// console.log(gitUser);
// console.log(Object.keys(gitUser));   // the output datatype will be array.
// console.log(Object.values(gitUser)); 
// console.log(Object.entries(gitUser));  // less used array in array
// console.log(gitUser.hasOwnProperty("id"));  // property present or not.

obj4={1:Vaishnavi, 2:Jassi, 3:Vaibhav,4:Tanishq,5:Naman};
