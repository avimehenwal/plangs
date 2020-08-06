// #region snippet
var obj = {
  x: 1,
  y: 2
};

obj.z = 3;
delete obj.x;
console.log(obj.hasOwnProperty('z')); // true
console.log(obj.hasOwnProperty('x')); // false
// #region snippet

console.log(obj);