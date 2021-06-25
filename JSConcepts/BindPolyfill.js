/**
 * Polyfill of bind function of JS
 */
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);

  return function (...param2) {
    return obj.apply(args[0], [...params, ...param2]);
  };
};

let mul = (a, b) => a * b;

let mulFour = mul.bind(this, 4);
let myMulFour = mul.myBind(this, 4);

console.log(mulFour(2));
console.log(myMulFour(2));
