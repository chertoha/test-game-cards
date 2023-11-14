export function createRandomField(x, y, cardList) {
  const field = [];

  for (let i = 0; i < y; i++) {
    field[i] = [];
    for (let j = 0; j < x; j++) {
      const randomIndex = Math.floor(Math.random() * 4);
      field[i][j] = cardList[randomIndex];
    }
  }
  return field;
}
