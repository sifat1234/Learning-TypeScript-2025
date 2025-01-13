class Player4 {
  //   public readonly first: string;
  //   public readonly last: string;
  //   private score: number = 0;

  constructor(
    public first: string,
    public last: string,
    private score: number
  ) {}

  private secretMethod(): void {
    console.log('Secret Method');
  }
}

const dog4 = new Player4('Elton', 'Steele', 10);
console.log(dog4.first);
console.log(dog4.last);
