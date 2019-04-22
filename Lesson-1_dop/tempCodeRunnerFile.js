let num = 33721,
/* let arr = [3, 3, 7, 2, 1];
let total1 = arr.reduce((product, value) => { return product * value; });
console.log(total1);
let total2 = total1 ** 3;
console.log(total2);
console.log(String(total2).slice(0, 2)); */
  str = String(num),
  total = str.split('');
console.log(str);
console.log(total);
total = total.reduce((product, value) => { return product * value; });
console.log(total);
let total2 = total ** 3;
console.log(total2);
console.log(String(total2).slice(0, 2));