function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    if(!(a > b)) throw new Error("First number must be greater than second number");
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
add(2, 3); // returns 5
add (10, 20); // returns 30
add(0, 0); // returns 0
add(-5, 5); // returns 0

subtract(5, 2); // returns 3
multiply(4, 5); // returns 20
subtract(2, 5); // throws an error
multiply(0, 5); // returns 0
multiply(-3, 4); // returns -12
subtract(10, 5); // returns 5
