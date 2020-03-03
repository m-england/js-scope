# js-scope'
This information is my notes from this book:
https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md

JavaScript compiler
	- compiled vs interpolated
	- Phase 1 Parsing/Compiling
	- Phase 2 execution
	- The JS Engine contains the Compiler and Scope Manager
	- how variables are created
	- let var and const
        - var always scopes to the function scope   
        - let and const are block scoped
        - const is immutable, kind of
        - TDZ
	- how scopes are created
	- Scopes are determined at Compilation Time
		- except with 'eval' and 'with'
		- with keyword, which essentially dynamically turns an object into a local scope -- its properties are treated as identifiers in that scope's block

	
Lexical Scope
	- scope "bubbles"
	- determined by the placement of functions, blocks, and variables
	- When you ask for a variable, it goes up the scope tree until it finds it
	- strict mode and auto-created variables
    - Blocks only become scopes when there is a let or const inside
	- var can be re-declared, let and const cannot
	- Shadowing 

Hoisting
	- Function hoisting
		- A function declaration is hoisted and initialized to its function value.
	- Variable hoisting
		- ONLY var
		-  A var variable is hoisted, and then auto-initialized to undefined.
	- function hoisting and variable hoisting attach their name identifiers to the nearest enclosing function scope (or if none, the global scope), not a block scope.
	

Functions
	- When a function (declaration or expression) is defined, a new scope is created.
	- Function declarations vs function expressions and their scope
	- Anonymous function expressions have no name identifier, so there is no identifier to effect either scope.
	
Arrow Functions
	- Arrow functions are lexically anonymous, meaning they have no directly related identifier that references the function.
	- Arrow functions have lexical this behavior, arrow functions treat this like any lexical variable.
	
this
	- this refers to the object containing the called location (kind of)
	- it depends on how it is called,
	- in classes, it refers to the class because functions are defined as properties
	- if you write function declarations, you'll lose the this, unless you use bind

Closures
	- Most common closures are callbacks - either in promise form or otherwise from api calls and event handlers
	- Closure is when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn't be accessible.
		- closures accessing global variables don't create closures
		- Closures run in the same scope don't create closures 
		- Pure functions don't create closures
	- This works because functions are first-class values.  They are passed by reference, so returning a function just returns a reference to an in-place function, still in its own scope	 
	- Closures are not snapshots of what it looked like at the time.  They are variable-oriented, not value-oriented