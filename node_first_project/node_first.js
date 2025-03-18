// const fs = require('fs');
// fs.writeFileSync('hello.txt','hello from node'); 
// let name = 'hel';
// var num = 22;
// var hasHobbies = true;
// num = 21;
// console.log(name);
// console.log(num);
// console.log(hasHobbies)

// // function summarizeUser(){
// //     return(num + name);
// // }


// const summarizeUser = (num,name) => {
//     return num + name;
// }; 


// console.log(summarizeUser(num,name));

// const hobbies = ['swimming','dancing'];
// console.log(hobbies.map(hobby => 'hobbies:' + hobby));
// console.log(hobbies);
// console.log(...hobbies);


const person = {
    name: 'raj',
    age: '20',
    greet(){
        console.log('hi i am guru');
    }
};

const printname = (personData) => {
    console.log(personData.name);
}

printname(person);
//write program to add two numbers

const printname2 = (name) => {
    console.log(name);
}
const hobbies= ['Sports', 'Cooking'];
    
    const [hobbyl, hobby2] = hobbies;
    console. log(hobbyl, hobby2);
