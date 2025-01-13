class Player2 {
  readonly first: string;
  readonly last: string;
  score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const dog7 = new Player2('Elton', 'Steele');
console.log(dog7.score);
