export class GameView {
  #container;

  constructor(selector) {
    this.#container = document.querySelector(selector);
  }

  render(field) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < field.length; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < field[i].length; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = field[i][j]?.pic || "";
        cell.dataset.y = i;
        cell.dataset.x = j;
        row.appendChild(cell);
      }

      fragment.appendChild(row);
    }
    this.container.innerHTML = "";
    this.container.appendChild(fragment);
  }

  markSiblings(field, siblingsList) {
    this.render(field);
    siblingsList.forEach(([x, y]) => {
      const ref = this.#container.querySelector(
        `[data-x="${x}"][data-y="${y}"]`
      );
      ref.classList.add("sibling");
    });
  }

  get container() {
    return this.#container;
  }
}
