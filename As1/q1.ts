// ASSIGNMENT 1

// Question 1:

// Implement the processInput function
function processInput(input: number | string) {
    if(typeof input === "string"){
        return input + input
    } else {
        return input * input
    }
}


// Test cases, do not modify
console.log(processInput(5));
console.log(processInput("hello"));


// Question 2:
// Create the Car type
type Car = {
    make: string;
    model: string;
}
// Create the Electric type
type Electric = {
    batteryLife: number;
}
// Create the ElectricCar type
type ElectricCar = Car & Electric;
// Create the printElectricCarInfo function
function printElectricCarInfo(input: ElectricCar) {
    console.log(`Make: ${input.make}, Model: ${input.model}, Battery Life: ${input.batteryLife}`)
}

// Test case, do not modify
const teslaModelS: ElectricCar = {
    make: "Tesla",
    model: "Model S",
    batteryLife: 400
  };
  
printElectricCarInfo(teslaModelS); // "Make: Tesla, Model: Model S, Battery Life: 400 miles" 

// Question 3:
type Circle = {
    kind: "circle";
    radius: number;
  };
  
  type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
  };
  
  // Create a type Shape that contains the properties of either Circle or Rectangle
  type Shape = Circle | Rectangle
  
  // Create a function calculateArea that takes a Shape as a parameter and returns its area
  function calculateArea(input: Shape): number {
    if(input.kind === "circle"){
        return Math.PI * input.radius * input.radius;
    }else{
        return input.width * input.height
    }
  }
  
  // Test cases, do not modify
  const circle: Shape = { kind: "circle", radius: 5 };
  const rectangle: Shape = { kind: "rectangle", width: 4, height: 6 };
  console.log(calculateArea(circle));
  console.log(calculateArea(rectangle));


// Question 4:
type MathFunction = (a: number, b: number) => number;

function mathOperation(a: number, b: number, operation: MathFunction): number {
  return operation(a, b);
}

// Implement add, subtract, and multiply functions
const add = (a: number, b: number): number => {return a + b} // ... continue the implementation
const subtract = (a: number, b: number): number => {return a - b}// ... continue the implementation
const multiply = (a: number, b: number): number => {return a * b} // ... continue the implementation

// Test cases, do not modify
console.log(mathOperation(5, 3, add)); // Output: 8
console.log(mathOperation(10, 4, subtract)); // Output: 6
console.log(mathOperation(3, 7, multiply)); // Output: 21


// Question 5:
function getNestedValue(obj: any, key: string): unknown {
    // Implement the function here
    // Use type guards to check if obj is an object and has the key
    // Use type assertion if necessary
    const keys = key.split('.');
    for(let i = 0; i < keys.length; i++){
        if (obj && typeof obj === "object" && keys[i] in obj){
            obj = obj[keys[i]]
        } else{
            return undefined
        }     
    }
    return obj;
  }
  
  // Test cases, do not modify
  const testObj = { a: { b: { c: 42 } } };
  console.log(getNestedValue(testObj, "a.b.c")); // Should print: 42
  console.log(getNestedValue(testObj, "x.y.z")); // Should print: undefined
  console.log(getNestedValue(null, "a.b.c")); // Should print: undefined



