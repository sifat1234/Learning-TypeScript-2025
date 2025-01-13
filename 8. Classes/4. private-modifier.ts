class Player10 {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log('Secret Method');
  }
}

const dog10 = new Player10('Elton', 'Steele');
// console.log(dog10.score);
// dog10.secretMethod();
