// Examples
// console.log(name); // ReferenceError: name is not defined

// What went wrong here?
console.log(foo.substring(1)) // ReferenceError: Cannot access 'foo' before initialization
let foo = 'bar';

// What's wrong here?
function addNumbers() { 
    let num1 = 2;
    let num2 = 3;
    return num1 + num2;
  }
  
  console.log(num1); // ReferenceError num1 is not defined.

/****************************************************************************
Make 3-5 different examples of reference errors. 
Look at the console to see what line the error is on to know what to do when 
coming in contact with that error 

RESOURCE: CHECK THE README
****************************************************************************/

// Error 1

// Error 2

// Error 3

// Error 4

// Error 5