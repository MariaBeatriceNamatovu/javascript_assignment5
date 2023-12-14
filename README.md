This is a summary of some Javascript topics
Array Methods
1. Array length
The length property returns the length (size) of an array:
  An example:
const fruits = ["Chemistry", "Biology", "Math"];
let size = fruits.length;

2. Array to String()
   The JavaScript method toString() converts an array to a string of (comma-separated) array values.
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   document.getElementById("demo").innerHTML = fruits.toString();
Note: The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:

3. Popping and Pushing
   Popping items out of an array, or pushing items into an array.
   The pop() method removes the last element from an array and returns the value that was popped out
     const fruits = ["Banana", "Orange", "Apple", "Mango"];
     let fruit = fruits.pop();

  push() method adds a new element to an array (at the end) and returns the new array:
  
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let length = fruits.push("Kiwi");

4. Array Shift()
   Shifting is equivalent to popping, but working on the first element instead of the last.
   The shift() method removes the first array element and "shifts" all other elements to a lower index.

   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.shift();

5. Array unshift()
   The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements and re
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.unshift("Lemon");

6. Length
   The length property provides an easy way to append a new element to an array:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[fruits.length] = "Kiwi";

7. Concat()
   The concat() method creates a new array by merging (concatenating) existing arrays, it takes any number of arrays to be merged.

   const myGirls = ["Cecilie", "Lone"];
   const myBoys = ["Emil", "Tobias", "Linus"];

   const myChildren = myGirls.concat(myBoys);

   const arr1 = ["Emil", "Tobias", "Linus"];
   const myChildren = arr1.concat("Peter"); 

8. Flattening an Array
   Flattening an array is the process of reducing the dimensionality of an array.

   The flat() method creates a new array with sub-array elements concatenated to a specified depth.

   const myArr = [[1,2],[3,4],[5,6]];
   const newArr = myArr.flat();

9. Slicing and splicing
    The splice() method adds new items to an array.

   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.splice(2, 0, "Lemon", "Kiwi");

   The first parameter (2) defines the position where new elements should be added (spliced in).
   The second parameter (0) defines how many elements should be removed.
   The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
   
   the splice() method can aslo be used to remove elements from an array
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.splice(0, 1);

   The first parameter (0) defines the position where new elements should be added (spliced in).
   The second parameter (1) defines how many elements should be removed.
   The rest of the parameters are omitted. No new elements will be added.

The Slice():
The slice() method slices out a piece of an array into a new array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
The above example slices the array starting from "orange"

JavaScript Control Statements
Control statements in JavaScript are structures used to manage the flow of code execution based on specific conditions or to facilitate repetitive tasks.

Conditional Statements
1. if Statement
Executes a block of code if a specified condition is true.
2. if...else Statement
Executes one block of code if a condition is true and another block if the condition is false.
3. else if Statement
Allows for multiple conditions to be checked sequentially.
Example:
let num = 10;
if (num > 0) {
    console.log("Number is positive");
} else if (num === 0) {
    console.log("Number is zero");
} else {
    console.log("Number is negative");
}

Switch Statement
Evaluates an expression and executes code blocks based on matching cases.
Example:
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    //... other cases
    default:
        console.log("Invalid day");
}

Looping Statements
1. for Loop
Repeats a block of code a specified number of times.
2. while Loop
Repeats a block of code while a specified condition is true.
3. do...while Loop
Repeats a block of code while a specified condition is true, and it will always execute the block at least once.
Example of a for loop:                                                                                                                                                                          
for loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}
while loop:
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
do....while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


Javascript Functions

Functions in JavaScript are reusable blocks of code that perform a specific task or calculate a value. 
They can accept input (arguments), process that input, and optionally return a value.


Certainly! Here's an example of how you might summarize JavaScript functions in a README file:

JavaScript Functions
Functions in JavaScript are reusable blocks of code that perform a specific task or calculate a value. They can accept input (arguments), process that input, and optionally return a value.

Defining Functions
1. Function Declaration
Declaring a function using the function keyword followed by a name and a block of code.

function greet() {
    console.log("Hello!");
}
2. Function Expression
Assigning a function to a variable, often done anonymously using an arrow function or the function keyword.
const greet = function() {
    console.log("Hello!");
};

3. Arrow Function
A more concise way to write functions, especially for short, one-line functions.
const greet = () => {
    console.log("Hello!");
};

Passing Arguments
1. Parameters
Variables listed as part of the function definition, used to hold incoming values.
function greet(name) {
    console.log(`Hello, ${name}!`);
}


3. Arguments
Values passed to a function when it is invoked, which correspond to the parameters
greet("Alice");
// Output: Hello, Alice!

 Return Values
The return statement ends function execution and specifies the value to be returned to the caller.
function add(a, b) {
    return a + b;
}
let result = add(3, 5);
// result = 8

2. Default Return
If no return statement is present, the function returns undefined by default.
function doSomething() {
    // No return statement
}
let result = doSomething();
// result = undefined


