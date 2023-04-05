// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//         total += arg;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));


///////////////////////////////////////////////////
// const sum = (function() {
//   return function sum(x, y, z) {
//     const args = [ x, y, z ];
//     return args.reduce((a, b) => a + b, 10);
//   };
// })();
// console.log(sum(1,2,3,4)); 

// let arr=[100]
// let arr2=[3,4]
// let arr3=[5,6]

//  let  newarr=[100,...arr2,...arr,...arr3,200]

//  console.log(newarr)

// let person = {
//     firstName: 'rustam',
//     lastName: 'khan',
//     age: 18,
//    mobile:'9116795488'
// };

// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'jaipur',
//     mobile:'6377253061'
// };
// let employee = {
//     ...person,
//     ...job
// };
// console.log(employee);

// function printAge(age) {
//     age && console.log("My age is " + age);
//   }
  
//   printAge(10);

 function test(fName, lName) {
      return fName || lName || "unknowen";
    }
    console.log(test("rustam", "khan"));
  
