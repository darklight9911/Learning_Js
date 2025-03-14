//interview tips

// Execution Context = Call Stack + Scope Chain + this
// javascript is single threaded language

// Execution Context = Global Execution Context + Functional Execution Context

//excecution phase: code is executed line by line
//1.creation phase(memory allocation, hoisting)
//2.execution phase
/*
 step-1:[{code}] -> global execution context(referred to "this" as window object in browser)
 step-2:1 no phase -> variable hoisting(undefined)
                   -> function hoisting(undefined,definition)
 step-3:2 no phase -> code is executed line by line
                   -> variable assignment
                    -> function invocation(new execution context is created)
(new variable environment is created + excution thread is created)
                     -> function execution
(execution context is deleted from call stack after global execution context is executed)

*/


// Call Stack
// Call Stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).
// When a script calls a function, the interpreter adds it to the call stack and then starts executing the function.
// Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
// If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.
// Call Stack is synchronous.
// Call Stack is a single-threaded.
// Call Stack is a part of the V8 engine.
// Call Stack is a part of the JavaScript runtime.also browser \nodejs



