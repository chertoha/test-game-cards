export class GameBoard {
  #field;

  constructor(data) {
    this.#field = data;
    this.siblingsList = [];
  }

  get field() {
    return this.#field;
  }

  getSiblingsList() {
    return this.siblingsList;
  }

  findSiblings(x, y) {
    if (!this.#field[y][x]) return;

    this.siblingsList = [];
    this.#addSibling(x, y);
    this.#siblingsRecursion(x, y);
  }

  removeCells() {
    this.siblingsList.forEach(([x, y]) => {
      this.#field[y][x] = null;
    });

    this.siblingsList = [];
  }

  #siblingsRecursion(x, y) {
    const currentKey = this.#field[y][x].key;

    const checkList = [
      { _y: y - 1, _x: x, isOutOfBoard: y - 1 >= 0 },
      { _y: y, _x: x + 1, isOutOfBoard: x + 1 < this.#field[0].length },
      { _y: y + 1, _x: x, isOutOfBoard: y + 1 < this.#field.length },
      { _y: y, _x: x - 1, isOutOfBoard: x - 1 >= 0 },
    ];

    checkList.forEach(({ _x, _y, isOutOfBoard }) => {
      if (
        isOutOfBoard &&
        this.#field[_y][_x]?.key === currentKey &&
        !this.#doesCellExistInSiblingList(_x, _y)
      ) {
        this.#addSibling(_x, _y);
        this.#siblingsRecursion(_x, _y);
      }
    });
  }

  #doesCellExistInSiblingList(x, y) {
    return this.siblingsList.some((item) => item[0] === x && item[1] === y);
  }

  #addSibling(x, y) {
    this.siblingsList.push([x, y]);
  }
}
