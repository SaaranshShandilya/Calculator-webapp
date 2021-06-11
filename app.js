var display = 0;
var num;
const display_span = document.getElementById("disp");
const one = document.getElementById("one");
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const pl = document.getElementById("pl")
const min = document.getElementById("min")
const mul = document.getElementById("mul")
const di = document.getElementById("di")
const eq = document.getElementById("eq")
const clear = document.getElementById("clear")


function dp(num) {
    if (display == 0) {
        display = num;
    } else {
        display = display * 10;
        display = display + num;
    }
    display_span.innerHTML = display;

}

pl.addEventListener('click', function() {
    num1 = display;
    console.log(num1);
    display_span.innerHTML = 0;
    display = 0;
    eq.addEventListener('click', function() {
        num2 = display;
        var sum = num1 + num2;
        console.log(sum)
        display_span.innerHTML = sum;
    })
})



one.addEventListener('click', function() {
    dp(1)
})

two.addEventListener('click', function() {
    dp(2)
})

three.addEventListener('click', function() {
    dp(3)
})

four.addEventListener('click', function() {
    dp(4)
})

five.addEventListener('click', function() {
    dp(5)
})

six.addEventListener('click', function() {
    dp(6)
})

seven.addEventListener('click', function() {
    dp(7)
})

eight.addEventListener('click', function() {
    dp(8)
})

nine.addEventListener('click', function() {
    dp(9)
})

zero.addEventListener('click', function() {
    dp(0)
})

clear.addEventListener('click', function() {
    display = 0;
    display_span.innerHTML = display;
})

min.addEventListener('click', function() {
    num1 = display;
    console.log(num1);
    display_span.innerHTML = 0;
    display = 0;
    eq.addEventListener('click', function() {
        num2 = display;
        var sum = num1 - num2;
        console.log(sum)
        display_span.innerHTML = sum;
    })
})

mul.addEventListener('click', function() {
    num1 = display;
    console.log(num1);
    display_span.innerHTML = 0;
    display = 0;
    eq.addEventListener('click', function() {
        num2 = display;
        var sum = num1 * num2;
        console.log(sum)
        display_span.innerHTML = sum;
    })
})

di.addEventListener('click', function() {
    num1 = display;
    console.log(num1);
    display_span.innerHTML = 0;
    display = 0;
    eq.addEventListener('click', function() {
        num2 = display;
        var sum = num1 / num2;
        console.log(sum)
        display_span.innerHTML = sum;
    })
})