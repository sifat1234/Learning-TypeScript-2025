# Function with Object Params

```ts
function printPerson(person: {
  name: string;
  age: number;
  isStudent: boolean;
}) {
  console.log(
    `Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`
  );
}

const john = { name: 'John', age: 27, isStudent: false };
printPerson(john);
```

In this example, the printPerson() function takes an object as a parameter, and we annotate the object inline by specifying its properties and types within curly braces.

We define a john object with three properties that conform to the expected shape of the argument that printPerson() expects, and pass it as an argument to the function.

This approach can be useful for annotating objects inline when defining function parameters, but it can become repetitive to specify the same shape in multiple places in your code. In such cases, it may be more convenient to use a type alias or interface to reduce duplication and make your code more readable.

# Type Aliases

A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.

For example:

```ts
type MyString = string;
```

This defines a type alias called MyString that refers to the built-in string type.

Type aliases can also be used to define more complex types, such as object types, function types, union types, and intersection types.

```ts
type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const myPerson: Person = { name: 'Alice', age: 25 };
printPerson(myPerson);
```

In this example, we've defined a Person type using an object type that has name and age properties. We've then defined a printPerson function that takes a parameter of type Person and logs out their name and age.

Finally, we've created a myPerson variable of type Person, initialized it with an object that has a name of "Alice" and an age of 25, and passed it to the printPerson function.

Note that we're using TypeScript annotations to explicitly specify the types of the variables and function parameters. This is not strictly necessary in this case because TypeScript can infer the types from the context, but it's generally a good practice to include explicit type annotations for readability and maintainability.

# Optional Properties

You can make a certain property optional in an object type by adding a question mark (?) after the property name.

For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question mark after the email property:

```ts
type Person = {
  name: string;
  age: number;
  email?: string;
};
```

Now, when you create an object of type Person, you can choose whether or not to include the email property.

For example:

```ts
const alice: Person = { name: 'Alice', age: 30 };
const bob: Person = { name: 'Bob', age: 25, email: 'bob@example.com' };
```

In this example, the alice object does not include the email property, while the bob object does. Because the email property is marked as optional in the Person type definition, it is valid to create objects with or without it.

Note that optional properties must come after any required properties in the object type definition. If you try to define an optional property before a required property, TypeScript will give you a compile-time error.

You can make a certain property readonly in an object type by using the readonly keyword before the property name.

For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property readonly. You can do this by adding the readonly keyword before the email property:

```ts
typescript;
type Person = {
  name: string;
  age: number;
  readonly email: string;
};
```

Now, when you create an object of type Person, you can set the name and age properties as usual, but you cannot change the email property after it has been created:

```ts
const alice: Person = { name: 'Alice', age: 30, email: 'alice@example.com' };
console.log(alice.email); // "alice@example.com"
// This will give a compile-time error:
alice.email = 'new-email@example.com';
```

In this example, the alice object includes a readonly email property that is set to "alice@example.com" when the object is created. We are able to read the value of the email property using dot notation (alice.email), but we cannot change its value once it has been created.

Note that any attempt to change the value of a readonly property will result in a compile-time error. Also note that readonly applies only to the property itself, not to the object that contains it. In other words, the alice object itself is not readonly, so you can still change its name and age properties if needed.

# Intersection Types

In TypeScript, an intersection type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol.

For example, let's say you have two object types: Person and Employee. The Person type has name and age properties, and the Employee type has id and title properties:

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};
```

You can create an intersection type called PersonAndEmployee by combining the Person and Employee types using the & symbol:

```ts
type PersonAndEmployee = Person & Employee;
```

Now, objects of type PersonAndEmployee will include all the properties and methods of both the Person and Employee types:

```ts
const alice: PersonAndEmployee = {
  name: 'Alice',
  age: 30,
  id: 123,
  title: 'Manager',
};
```

In this example, the alice object is of type PersonAndEmployee, which includes all the properties (name, age, id, and title) from both the Person and Employee types.

Intersection types can be useful when you need to define a type that has the properties and methods of multiple other types. They can also be used with other type constructs, such as unions and type aliases.
