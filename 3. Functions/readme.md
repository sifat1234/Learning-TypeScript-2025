# Function Parameter Annotations

Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.

Here's an example:

```ts
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
```

In this example, we're declaring a function greet with a single parameter name. The name parameter is annotated with the type string, which means that it can only accept string values.

```ts
greet(22); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

If we call the greet function with a non-string value, TypeScript will show an error:

# Default Parameters

Default parameters in TypeScript allow you to specify a default value for a function parameter if one is not provided when the function is called.

Here's an example:

```ts
function greet(name: string = 'world') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, world!"
greet('Sifat'); // Output: "Hello, Sifat!"
```

In this example, we declare a function greet that takes a single parameter name, which has a default value of 'world'. If the name parameter is not provided when the function is called, it will default to 'world'.

When we call greet() without any arguments, it outputs "Hello, world!". When we call greet('HuXn'), it outputs "Hello, HuXn!".

# Function Return Annotations

Function return type annotations in TypeScript are used to specify the expected return type of a function.

Here's an example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

In this example, we're declaring a function add that takes two number parameters a and b. The function is annotated with a return type of number, which means that it must return a numeric value.

If the function doesn't return a value that matches the specified return type, TypeScript will show an error:

```ts
function add(a: number, b: number): number {
  return 'hello'; // Error: Type 'string' is not assignable to type 'number'.
}
```

# Void In TypeScript

In TypeScript, void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value.

Here's an example:

```ts
function logMessage(message: string): void {
  console.log(`Message: ${message}`);
}
```

In this example, the function logMessage takes in a message parameter of type string, logs it to the console, but does not return any value. Therefore, its return type is void.

# Never

The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value.

Here are some common use cases for the never type:

1. A function that always throws an error:

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

The above function takes in a message of type string, throws an error with that message, and never returns anything. The return type of this function is never.

2. A function that has an infinite loop:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

The above function has an infinite loop, so it will never return anything. Its return type is also never.

3. A variable that can never have a value:

```ts
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns(); // This line will cause a compile-time error because the function never returns
```

In this example, the variable x is declared as type never. Since it is not assigned any value, it cannot have a value. If we try to assign it a value using a function that never returns (like neverReturns()), TypeScript will raise a compile-time error.

The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instead of runtime.
