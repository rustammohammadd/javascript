### object

Question 1.
What is an object in JavaScript?
```
sadaran artho mai javascript mai sab kuch object hota hai ak onject kuch properties or method ko ak jagah bind karne ke liye paryog kiya jata hai ye properties or methods kisi single entity ko represent karti hai
```

Question 4.
What is the difference between an object and an array in JavaScript?
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

Question 7.
Create an Object with your personal details. Now print all the keys of the object in ascending order.
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