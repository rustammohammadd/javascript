
//1 map 
// map ki value
// const arr = [10,20,30,40,50];
// const arry = arr.map((value)=>{
//     console.log(value);
// });

//map ka index
// const arr = [10,20,30,40,50];
// const arry = arr.map((value,index)=>{
//     console.log(index);
// });

// const arrs = [10,20,30,40,50];
// const arry = arrs.map((value)=>{
// value++;
//     return value;
// });
// console.log(arry);

// const arr = [
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
// ];
// const newarr=arr.map((value)=>{
//     return value //value or product dono batate hai 
// });
// console.log(newarr);

// const arr = [
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
// ];
// const newarr=arr.map((value)=>value.price // ye aap price likhoge to price mil jayegi product likhoge to product mil jayega
// );
// console.log(newarr);

// const arr = [
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
//     {price: "100",product:"tshirt"},
// ];
// const newarr=arr.map((value)=> value.price.product //ye undefined batata hai
// );
// console.log(newarr);



// const numbers = [4, 9, 16, 25];
// console.log( numbers.map(Math.sqrt));   

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);
// console.log(newArr);
// function myFunction(num) {
//     return num * 10;
// }

// const persons = [
//     { firstname: "Malcom", lastname: "Reynolds" },
//     { firstname: "Kaylee", lastname: "Frye" },
//     { firstname: "Jayne", lastname: "Cobb" }
// ];
// console.log(persons.map(getFullName));
// function getFullName(item) {
//     return [item.firstname, item.lastname].join(" ");
// }

// filter
// const array  = [32, 33, 15, 40];
// // filter = output -- newarray 
// let mno = array.filter(test)
// function test(num){
//  return num%2===0 /// true 
// }
// console.log(mno);
// //    [32,40]  

// const arr =["ajeet","rafik","aarifji","aslam","rustam"];
// const mno = arr.filter(saab)
// function saab (num){
//   return num==="aslam"
// }
// console.log(mno);

//   const arr =["ajeet","rafik","aarifji","aslam","rustam"];
//  const mno = arr.filter( (saab)=>  saab==="aslam" )
//  console.log(mno)

// let arr =[10,20,30,40,50,60,70,80,90,10] ;
// let mno= arr.filter(sss)     
// function sss(num) {
//   return num%2===0
// }
// console.log(mno);

// const arrs =[10,20,30,40,50,60,70,80,90,0,0,10];
//   const arry = arrs.map(tesr)

//   function tesr(num){
//     return num %2===0 // true
//   } 
// const str = arrs.reduce(tests)

// function tests(valu1,vuke2){
// return  valu1+vuke2
// }
// console.log(str);

// const arr =[1,2,3,4,5,6,7,8,9,10];
// const arrs =arr.filter(rk)
// function rk (ab){
//   return ab%2===0
// }
// const arrs2 = arrs.map(test)
// function test(num){
//   return num + 1
// }
// const arr3 = arrs.reduce(tesr)
// function tesr(num1,num2){
//   return num1+num2
// }
// console.log(arr3);
// console.log(arrs);
// console.log(arrs);

// ak value 
/// [ ]  map  = kam kra skte ho action krane
//console.log(arry);



//     function test(a, b, fn) {
//   fn(a, b);
// }
// test(10, 20, function (a, b) {
//   console.log(a * b);
// });


// function test(num, fn1, fn2) {
//   if (num % 2 === 1) {
//     fn1();
//   } else {
//     fn2();
//   }
// }
// test(
//   11,
//   () => {
//     console.log("Odd");
//   },
//   () => {
//     console.log("Even");
//   }
// );


// function test(num1,num2,fn1,fn2,fn3,fn4){
// 	if(num1 >100 && num2>100 ){
// 		fn1()
// 	} else if(num1 >num2){
// 		fn2()
// 	}else if(num2 >num1){
// 		fn3()
// 	}else if(num1 === num2){
// 		fn4()
// 	}
// }
// test(101,201,
// 	()=> console.log("both number greater then 100"),
// 	()=> console.log("num1 is greater then num2"),
// 	()=> console.log("num2 is greater then num1"),
// 	()=> console.log("both numbers are equal"))


// let test = function () {
//     return function (ab) {
//         if (ab % 2 === 0) {
//             console.log("even");
//         } else {
//             console.log("odd");
//         };
//     };
// };
// test()(5)


// let test = function () {
//     return function (ab) {
//         if (ab % 2 === 0) {
//             return "even"
//         } else {
//             return "odd"
//         };
//     };
// };
// console.log(test()(5));

// const interval = setInterval(() => {
//     console.log("hello world");
//   }, 1000);
//   setTimeout(function () {
//     clearInterval(interval);
//   }, 10000);

// let helloWord = setInterval(()=>{
//     console.log("hello word")
// },1000)
// let weCode = setInterval(()=>{
//     console.log("we codeAcademy")
// },2000)
// setTimeout(()=>{
//     clearInterval(helloWord)
// },20000);
// setTimeout(()=>{
//     clearInterval(weCode)
// },30000);

// function test() {
//     return function (a, b) {
//         console.log(a + b);
//     };
// }
// let ans = test();
// ans(10, 20);
// test()(100, 200);

// function test() {
//     return function (num) {
//         if (num % 2 === 0) {
//             console.log("even");
//         } else {
//             console.log("odd");
//         }
//     };
// }
// let anss = test();
// ans(11);
// test()(12);


// function test() {
//     return function (num) {
//         if (num % 2 === 0) {
//             return "Even";
//         } else {
//             return "Odd";
//         }
//     };
// }
// let sss = test();
// console.log(sss(11));
// console.log(test()(12));

// const interval = setInterval(() => {
//     console.log("hello world");
// }, 1000);
// setTimeout(function () {
//     clearInterval(interval);
// }, 10000);

// let obj = {
//     myName: "Wecode Academy",
//     address: "Jhotwara, Jaipur",
//     mobile: 9581894461,
//     printDetails: function () {
//         console.log(this.myName, this.address, this.mobile);
//     },
// };
// obj.printDetails();

// let helloWord = setInterval(() => {
//     console.log("Hello World");
// }, 1000);
// let weCode = setInterval(() => {
//     console.log("WeCode Academy");
// }, 2000);
// setTimeout(() => {
//     clearInterval(helloWord);
// }, 20000);
// setTimeout(() => {
//     clearInterval(weCode);
// }, 30000);


// let minutes = 0;
// let seconds = 0;
// setInterval(function () {
//     ++seconds;
//     if (seconds === 60) {
//         minutes = minutes + 1;
//         seconds = 0;
//     }
//     console.log(minutes + ":" + seconds);
// }, 1000);

// function test(num) {
//     if (num % 2 == 0) {
//         return function () {
//             console.log("even");
//         };
//     } else {
//         return function () {
//             console.log("odd");
//         };
//     }
// }
// test(41)();

