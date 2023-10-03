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

// console.log(regularUser.name.fullname.firstname); we can crete objects under the object.(fully availability nesting).
3
// MergeOperation of Objects.

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
// const obj3={obj1,obj2}
// const obj3= Object 

const obj3={ obj1, obj2};
console.log(obj3);