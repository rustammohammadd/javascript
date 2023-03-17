#test1
```
Question -1
Create an array called fruits that contains the following elements: "apple", "banana", "orange". 
Now check if "orange" is in the fruits array.
```
```
let fruit = ["apple", "banana", "orange"];
let fruitorg = fruit.includes("orange");
console.log(fruitorg);
```

```
Question -2
Given an array of numbers, write a function that returns the sum of all the even numbers in the array.
```
```
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 1) {
            sum = sum + num[i];
        }
    }
    return sum;
}
console.log(sum(num));
```

```
Question -3
Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
```
```
function unique(array1, array2) {
    let arr = array1.concat(array2);
    let Array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!Array.includes(arr[i])) {
            Array.push(arr[i]);
        }
    }
    return Array;
}
let arr1 = [1, 2, 3, 4, 5, 5];
let arr2 = [3, 4, 5, 6, 7, 8];
console.log(unique(arr1, arr2)); 
```

```
Question -4
Given an array of strings, write a function that returns the longest string in the array.
```
```
function ab(array) {
  let cd = "";
for (let i = 0; i < array.length; i++) {
    if (array[i].length > cd.length) {
      cd = array[i];
    }
  }
  return cd;
}
let arr = ["apple", "banana", "cherry"];
console.log(ab(arr))
```

```
Question -5
Write a function that takes an array of numbers and returns the largest number in the array.
```
```
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
let arrs = [1, 2, 3, 4, 5, 6, 7];
let average2 = average(arrs);
console.log(average2);
console.log(arrs);
```

```
Question -6
Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.
```
```
const arr6 = [1,7,6,8,8,4,2,10,66,9];
const js = (arr6) => {
   return arr6.filter(we => {
      return we % 2 === 0;
   })
};
console.log(js(arr6));
```

```
Question -13
Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.
```
```
let array1 = [1, 2, 3, 4];
let x = 0;
let z = array1.reduce(
  (x, z) => x + z, 
);
console.log(z);
```

```
Question -11
Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function
```
```
function five(num) {
    let fil = num.filter(function(nums) {
      return nums > 5;
    });
    return fil;
  }
  let arr11 = [1, 6, 2, 8, 9, 3, 4,10];
  let fil = five(arr11);
  console.log(fil);
```

```
Question -19
Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
```
```
var num = [15, 17, 16,13];
num = num.sort();
console.log(num)
```


  
