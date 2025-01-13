type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const sifat: User = {
  first: 'Sifat',
  last: 'ahahmed',
  age: 18,
  email: 'test@gmail.com',
  password: 'strongpassword123',
};

console.log(
  `Name: (${sifat.first} ${sifat.last}) Age: (${sifat.age}) Email: (${sifat.email}) Password: (${sifat.password})`
);
