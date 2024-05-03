// Define the function for which we want to find the root.
function f(x) {
    return Math.sin(x) - x * Math.cos(x); // Example function: f(x) = sin(x) - x * cos(x)
}

// Define the derivative of the function.
function df(x) {
    return Math.cos(x) - Math.cos(x) + x * Math.sin(x); // Derivative of f(x) = sin(x) - x * cos(x)
}

// Define the initial guess for the root.
let x0 = 1;
// Define a tolerance level to stop the iteration when the result is close enough to the root.
const tolerance = 0.0001;
// Maximum number of iterations to prevent infinite looping.
const maxIterations = 100;
// Initialize variables.
let x = x0;
let iterations = 0;
// Perform the Newton-Raphson iteration.
while (Math.abs(f(x)) > tolerance && iterations < maxIterations) {
    // Calculate the next approximation of the root using the formula:
    // x = x - f(x) / f'(x)
    x = x - f(x) / df(x);
    iterations++;
}

// Check if a root was found within the tolerance.
if (Math.abs(f(x)) <= tolerance) {
    console.log(`Root found at x = ${x} after ${iterations} iterations.`);
} else {
    console.log(`Root not found within ${maxIterations} iterations.`);
}
