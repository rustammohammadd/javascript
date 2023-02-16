 # test 1

 - 1
 ```
 let french = Number(
    prompt("french fries 60rs per piece  do you want to order")
   );
   let burgers = Number(prompt("burgers 50rs per piece  do you want order"));
  let chowmin = Number(prompt("burgers 100 per plate  do you want order"));
  let Manchurian = Number(prompt("80rs per plate  do you want order"));
  let cokes = Number(prompt("cokes 50 per piece  do you want order"));
  
  let frenchtotal = french * 60;
  let burgerstotal = burgers * 50;
   let chowmintotal = chowmin * 100;
  let Manchuriantotal = Manchurian * 80;
  let cokestotal = cokes * 50;
  
  let total =
    frenchtotal + burgerstotal + chowmintotal + Manchuriantotal + cokestotal;
  
  console.log(` Frenchs:${french}*${frenchtotal}
  Burgers:${burgers} *${burgerstotal}
  Chowmin:${chowmin}* ${chowmintotal}
  Manchurian:${Manchurian}*${Manchuriantotal}
  Cokes:${cokes}*${cokestotal}
   Total Bill:${total}`);
```
 - 2
 ```
 for (let i = 5; i >= 1; i--) {
    let a = "";
   for (let j = 1; j <= i; j++) {
     if (j % 3 === 1) {
       a += "$";
      } else {
        a += "#";
      }
   }
    console.log(a);
  }
```
 - 10
 ```
 let c="hello world"
 console.log(c.length);
```
 - 4
 ```
 let num = 1
 switch (num%2==0) {
    case true :
        console.log("odd");
        break;
    case false:
        console.log("even");
        break;
    case 100 :
         console.log("100");
        break;

    default :
    console.log("10000");
        break;
 }
 ```