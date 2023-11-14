export class Controller {
  constructor(gameBoard, gameView) {
    this.board = gameBoard;
    this.view = gameView;

    this.view.render(this.board.field);

    this.view.container.addEventListener(
      "mouseover",
      this.#onMouseoverHandler.bind(this)
    );

    this.view.container.addEventListener(
      "mouseup",
      this.#onClickHandler.bind(this)
    );
  }

  #onMouseoverHandler(e) {
    setTimeout(() => {
      if (e.target.closest(".cell")) {
        const cell = e.target;

        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);
        this.board.findSiblings(x, y);

        const siblingsList = this.board.getSiblingsList();
        this.view.markSiblings(this.board.field, siblingsList);
      }
    }, 0);
  }

  #onClickHandler(e) {
    this.board.removeCells();
    this.view.render(this.board.field);
  }
}
