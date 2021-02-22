/**
 * @params n1 { number }
 * @params n2 { number }
 * @returns [ number || string ]
 * */
var add = function (n1, n2, showString) {
    return showString ? "Addition is " + (n1 + n2) : n1 + n2;
};
var number1 = 2;
var number2 = 4;
var showString = true;
var result = add(number1, number2, showString);
console.log(result);
