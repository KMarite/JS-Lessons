let num = 33721,
  str = String(num),
  total = str.split('');
console.log(str);
console.log(total);
total = total.reduce((product, value) => { return product * value; });
console.log(total);
let total2 = total ** 3;
console.log(total2);
console.log(String(total2).slice(0, 2));

