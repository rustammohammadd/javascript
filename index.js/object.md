# OBJECT TEST...

## Question 1.
### What is an object in JavaScript?
```
sadaran artho mai javascript mai sab kuch object hota hai ak onject kuch properties or method ko ak jagah bind karne ke liye paryog kiya jata hai ye properties or methods kisi single entity ko represent karti hai
```
## Question 4.
### What is the difference between an object and an array in JavaScript?
```
 let person= {
 name : "rustam",
 mobilenum : 9116795488,
 age : 18
 };
 let game = ["cricket","football","kabaddi","vollyball"]
 console.log(person.age)
 console.log(game[2])
 ```

## Question 7.
### Create an Object with your personal details. Now print all the keys of the object in ascending order.
```
let person= {
name : "rustam",
mobilenum : 9116795488,
age : 18,
address :"jaipur"
};
let keys =Object.keys(person)
keys.sort()
console.log(keys)
```

## Question 6.
### Write a function that takes an object representing a person and returns their full name.
```
let a ={
    name :"rustam",
    lastname:"khan",
}
console.log(a.name.concat(a.lastname))
```

## Question 3.
### How do you loop through the properties of an object in JavaScript?
```
let object = {
    name: "rustam",
    mobile: 9116795488,
    address: "jaipur",
};
let arr = Object.entries(object);
for (let a = 0; a <= arr.length - 1; a++) {
    console.log(arr[a][0], arr[a][1]);
}
```

## Question 10.
### Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.
```
function maxi(array) {
    return Math.max.apply(Math, array);
  }
  let array = [1,2,3,4,5,6];
  console.log(maxi(array));
  ```