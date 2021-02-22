var num1 = document.querySelector('#one');
var num2 = document.querySelector('#two');
var button = document.querySelector('#add');
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
});
