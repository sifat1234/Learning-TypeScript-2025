class Player5 {
  constructor(
    public first: string,
    public last: string,
    protected _score1: number
  ) {}

  get score(): number {
    return this._score1;
  }
}

class SuperPlayer extends Player5 {
  public isAdmin: boolean = true;
  maxScore() {
    this._score1 = 99999;
  }
}

const dog5 = new Player5('Elton', 'Steele', 10);
