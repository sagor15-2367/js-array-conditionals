var number=[43,23,34,12,54,22,56,];
// get element by index
// console.log(number);
console.log(number[5]);
console.log(number[1]);
console.log(number[3]);
var element=number[5];
console.log(element);
// set element value by index
number[2]=77;
console.log(number);
// find index of an element
var positionIndex = number.indexOf(54);
console.log(positionIndex);
// find index of no element
var positionError=number.indexOf(100);
console.log(positionError);
