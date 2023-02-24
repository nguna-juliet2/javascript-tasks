// QUESTION 1

const array1 = [
  {
    id: 1,
    name: 'Juliet',
    age: 22,
    location: 'kawaala',
  },
  {
    id: 2,
    name: 'Moxhus',
    age: 23,
    location: 'Kasubi',
  },
  {
    id: 3,
    name: 'Isaac',
    age: 24,
    location: 'Kawaala',
  },
];

 

// 1- Find a contact with age = 22
const NewArray = array1.filter(item => item.age === 22);
 console.log(NewArray);
 


// 2 - Find all contacts with location being kawaala
 const allContact = array1.filter(item => item.location === "kawaala");
 console.log(allContact);

// 3 - Find the total sum of their age
// let sum = 0;
// for(i=0, i=array1.length, i++{
//   sum
// };
const totalSum = array1.reduce((sum , item) => sum + item.age,0);
console.log(totalSum);
 
 
// 4 - add a new contact with the following details, id: 4, name: 'Larry', age: 23, location: 'Bulenga'
const UpdatedArray = array1.push({id:3 , name:"Larry" ,location:"Bulenga"});
console.log(UpdatedArray);
// // 5 - Remove the contact with an age lower than the others and return the rest of the contacts
//    
const lowerAge =array1.filter(item => item.age !==22);
console.log(lowerAge);



 
// QUESTION 2
const obj = {
  name: 'Julie',
  age: 23,
  cgpa: 4.0,
};
 

// Delete the cgpa property from the obj and return the obj
delete obj.cgpa;
console.log(obj);


 