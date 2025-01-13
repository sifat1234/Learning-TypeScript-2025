# Class Properties Annotations

You can annotate class properties with a type. This allows you to define the data type of the property and ensure that it is always consistent.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

In this example, we define a Person class with two properties: name and age. We annotate these properties with a type, string for name and number for age.

When you create an instance of this class, you need to provide values for both the name and age properties:

```ts
const person = new Person('John', 30);
```

This ensures that the name property will always be a string and the age property will always be a number, which makes the code more predictable and easier to maintain.

# Access Modifiers

In TypeScript, you can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.

There are three types of access modifiers in TypeScript:

public: Members marked as public can be accessed from anywhere, both inside and outside the class.

private: Members marked as private can only be accessed from within the class they are defined in.

protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

Here's an example:

```ts
class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  private getAge(): number {
    return this.age;
  }

  protected getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Canine');
  }

  public getInfo(): string {
    return `${this.getName()} is a ${this.getSpecies()} and is ${
      this.age
    } years old.`;
  }
}
```

In this example, we define an Animal class with three properties: name, age, and species. We annotate these properties with different access modifiers (public, private, and protected) to control their visibility.

We also define three methods (getName, getAge, and getSpecies) that correspond to the three properties. Again, we annotate these methods with different access modifiers to control their visibility.

We then define a Dog class that extends the Animal class. Since species is marked as protected, it can be accessed from within the Dog class. We define a method (getInfo) that uses the getName and getSpecies methods to return a string with information about the dog.

Note that when you create an instance of the Dog class, you need to provide values for the name and age properties defined in the Animal class, but not for the species property since it's already defined in the Dog class constructor. Also note that the getAge method is marked as private, so it can only be called from within the Animal class and cannot be accessed from outside the class or its subclasses.

# Getters & Setters

In TypeScript, getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

Here's an example of how to define a getter and setter in TypeScript:

```ts
class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error('Value cannot be negative');
    }
    this._myProperty = value;
  }
}
```

In this example, myProperty is defined as a private property with an initial value of 0. The get and set keywords are used to define the getter and setter methods respectively.

The get method is responsible for returning the value of \_myProperty, while the set method is responsible for validating the input value and setting the value of \_myProperty. In this case, we are checking to see if the input value is negative and throwing an error if it is.

To access the myProperty property from outside the class, you can simply use instance.myProperty, where instance is an instance of the MyClass class. When you access myProperty, the get method is called and returns the current value of \_myProperty. To set the value of myProperty, you can use instance.myProperty = newValue, where newValue is the new value you want to assign to the property. When you assign a value to myProperty, the set method is called with the new value as its input.
