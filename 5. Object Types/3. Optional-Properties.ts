type User = {
  name: string;
  age?: number;
  location: string;
};

const user: User = {
  name: 'Sifat',
  age: 22,
  location: 'Bangladesh',
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
