import { Controller } from "./controller/Controller.js";
import { Card } from "./models/Card.js";
import { GameBoard } from "./models/GameBoard.js";
import { GameView } from "./ui/GameView.js";
import { taskField } from "./utils/taskField.js";
import { createRandomField } from "./utils/createRandomField.js";

const WIDTH = 6;
const HEIGTH = 7;

const cardHeart = new Card("heart", "♥");
const cardClub = new Card("club", "♣");
const cardPeak = new Card("peak", "♠");
const cardDiamond = new Card("diamond", "♦");

const cardList = [cardHeart, cardClub, cardPeak, cardDiamond];

const randomField = createRandomField(WIDTH, HEIGTH, cardList);

let initialField = randomField;

// ЗВЕРНІТЬ УВАГУ !
// Якщо у Вас є потреба перевірити додаток із полем, як на завданні, розкоментуйте цей код.
//////////////////////////////
// initialField = taskField(...cardList);
//////////////////////////////

const gameBoard = new GameBoard(initialField);
const gameView = new GameView("#rootContainer");
new Controller(gameBoard, gameView);
