function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    if(!(a > b)) throw new Error("First number must be greater than second number");
    return a - b;
}

add(2, 3); // returns 5
add (10, 20); // returns 30
add(0, 0); // returns 0
add(-5, 5); // returns 0

subtract(5, 2); // returns 3
