// let arr = [1, 2, 3, [4, 5], 6, 7, [8, 9], 10, 11]
// let [, a, , [, b], , c, [, d]] = arr
// console.log(a, b, c, d);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [, a, , b, , , c] = arr;
// console.log(a, b, c);

// let arr = [10, 20, 1, 2, 33, 50];
// let [, , , a] = arr;
// console.log(a);

// let arr = [10, 20, [1, 2], 33];
// let [, , , a] = arr;
// console.log(a); //33

// let arr = [10, 20, [1, 2], 33];
// let [, , [, a]] = arr;
// console.log(a); //2

// let arr = [10, 20, [1, 2, [4, 5], 6, 7], 33];
// let [, a, [, b, [, c], , d]] = arr;
// console.log(a, b, c, d); // 20 2 5 7

// function test() {
//     return 10, 20, 30, 40;
// }
// console.log(test()); //40

// function test() {
//     return [10, 20, 30, 40];
// }
// console.log(test()[1]);

// let arr = [10, 20];
// let [, a = 100, d = 500] = arr;
// console.log(a, d);

// let obj = {
//     name: "Wecode",
//     age: 21,
//     address: {
//         pincode: 302012,
//         city: "Jaipur",
//         state: "Rajasthan",
//         customerDetails: {
//             customerName: "Abhinav",
//             mobile: 934545345,
//         },
//     },
// };
// let {
//     age: myAge = 100,
//     name,
//     address: {
//         pincode,
//         customerDetails: { mobile },
//     },
// } = obj;
// console.log(myAge, name, pincode, mobile);

// let obj = {
//     name: "Wecode",
//     age: 21,
//     pincode: 302012,
//     city: "Jaipur",
//     state: "Rajasthan",
// };
// function test({ name, age }) {
//     console.log(name, age);
// }
// test(obj);

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;
//     return [add, subtract, multiply, divide];
// }
// const [add, subtract, multiply, divide] = calculate(4, 7);
// console.log(add);
// console.log(subtract);
// console.log(multiply);
// console.log(divide);

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021,
//     color: 'red'
// }
// myVehicle(vehicleOne);
// function myVehicle({ type, color, brand, model, year }) {
//     const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + ' ' + year;
//     console.log(message);
// }

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021,
//     color: 'red',
//     registration: {
//         city: 'Houston',
//         state: 'Texas',
//         country: 'USA'
//     }
// }
// myVehicle(vehicleOne)
// function myVehicle({ model, type, registration: { state } }) {
//     const message = 'My ' + model + ' is registered in ' + state + ' ' + type;
//     console.log(message);
// }

