# MONTHLY TEST.....

## Question 1.
### Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.
```
let str = "rustamkhanm"
let check = str.indexOf("khan") === 4
if (check) {
    strs = str.slice(0, 4) + str.slice(8)
    console.log(strs);
} else {
    console.log(str);
}
```

## Question 2.
### Write a JavaScript program to capitalize the first letter of each word of a given string.
```
function capital(str) {
    str = str.split(" ");
    for (let a = 0, b = str.length; a < b; a++) {
        str[a] = str[a][0].toUpperCase() + str[a].substr(1);
    }
    return str.join(" ");
}
console.log(capital("rustam khan from jaipur"));
```

## Question 5.
### Write a JavaScript function to extract unique characters from a string.
```
function unique(str1) {
    var str = str1;
    var uniq = "";
    for (var a = 0; a < str.length; a++) {
        if (uniq.indexOf(str.charAt(a)) == -1) {
            uniq += str[a];
        }
    }
    return uniq;
}
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));
```

## Question 6.
### Write a JavaScript function to chop a string into chunks of a given length. Test Data :
```
string_chop = function (str, size) {
    if (str == null) return [];
    str = String(str);
    size = size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('rustam'));
console.log(string_chop('rustam', 1));
console.log(string_chop('rustam', 2));
console.log(string_chop('rustam', 3));
```

## Question 3.
###  digits in a given number are the same or not.
```
let sam = 222233222222
let sum = sam.toString().split("")
for (let a = 0; a < sum.length; a++) {
    for (let b = 0; b < sum.length; b++) {
        if (sum[a] !== sum[b]) {
            console.log("false");
        } else {
            console.log("true");
        }
    }
}
```

## Question 8.
### Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.
```
let arr = [1, 2, 3, 4, 5, 6, 11, 30, 31, 67, 44, 33, 66, 38, 49, 54, 33, 65]
ans = arr.filter(filterss)
function filterss(num) {
    return num > 30 && num <= 50
}
console.log(ans);
function maps(num) {
    return num + 20
}
ans2 = ans.map(maps)
function reduces(num1, num2) {
    return num1 + num2
}
totel = ans2.reduce(reduces)
console.log(totel);
```

## Question 9.
### Convert below array
```
const arr0 = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
const arr1 = arr0.flatMap((arr) => arr[0] + arr[1]);
console.log(arr1);
```

## Question 10.
### Print below pattern
```
for (let c = 1; c <= 5; c++) {
    for (let a = 1; a <= 5; a++) {
        if (a >= c) {
            document.write(a + " ");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}
```

### Question 4.
Write a JavaScript function that reverse a number.
```
function reverses(a)
{
	a = a + "";
	return a.split("").reverse().join("");
}
console.log(Number(reverses(32243)));
```