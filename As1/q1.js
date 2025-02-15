// ASSIGNMENT 1
// Question 1:
// Implement the processInput function
function processInput(input) {
    if (typeof input === "string") {
        return input + input;
    }
    else {
        return input * input;
    }
}
// Test cases, do not modify
console.log(processInput(5));
console.log(processInput("hello"));
// Create the printElectricCarInfo function
function printElectricCarInfo(input) {
    console.log("Make: ".concat(input.make, ", Model: ").concat(input.model, ", Battery Life: ").concat(input.batteryLife));
}
// Test case, do not modify
var teslaModelS = {
    make: "Tesla",
    model: "Model S",
    batteryLife: 400
};
printElectricCarInfo(teslaModelS); // "Make: Tesla, Model: Model S, Battery Life: 400 miles" 
// Create a function calculateArea that takes a Shape as a parameter and returns its area
function calculateArea(input) {
    if (input.kind === "circle") {
        return Math.PI * input.radius * input.radius;
    }
    else {
        return input.width * input.height;
    }
}
// Test cases, do not modify
var circle = { kind: "circle", radius: 5 };
var rectangle = { kind: "rectangle", width: 4, height: 6 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));
function mathOperation(a, b, operation) {
    return operation(a, b);
}
// Implement add, subtract, and multiply functions
var add = function (a, b) { return a + b; }; // ... continue the implementation
var subtract = function (a, b) { return a - b; }; // ... continue the implementation
var multiply = function (a, b) { return a * b; }; // ... continue the implementation
// Test cases, do not modify
console.log(mathOperation(5, 3, add)); // Output: 8
console.log(mathOperation(10, 4, subtract)); // Output: 6
console.log(mathOperation(3, 7, multiply)); // Output: 21
// Question 5:
function getNestedValue(obj, key) {
    // Implement the function here
    // Use type guards to check if obj is an object and has the key
    // Use type assertion if necessary
    var keys = key.split('.');
    for (var i = 0; i < keys.length; i++) {
        if (obj && typeof obj === "object" && keys[i] in obj) {
            obj = obj[keys[i]];
        }
        else {
            return undefined;
        }
    }
    return obj;
}
// Test cases, do not modify
var testObj = { a: { b: { c: 42 } } };
console.log(getNestedValue(testObj, "a.b.c")); // Should print: 42
console.log(getNestedValue(testObj, "x.y.z")); // Should print: undefined
console.log(getNestedValue(null, "a.b.c")); // Should print: undefined
