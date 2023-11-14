export class Card {
  #pic;
  #key;

  constructor(key, pic) {
    this.#key = key;
    this.#pic = pic;
  }

  get pic() {
    return this.#pic;
  }

  get key() {
    return this.#key;
  }
}
