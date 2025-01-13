class Player1 {
  first: string;
  last: string;
  // 👇
  score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const dog2 = new Player1('Elton', 'Steele');
console.log(dog1.score);
