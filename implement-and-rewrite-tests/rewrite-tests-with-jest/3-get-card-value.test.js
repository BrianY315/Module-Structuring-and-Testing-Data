import { getCardValue } from "../implement/3-get-card-value.js";

test.each([
  ["2♠", 2],
  ["9♠", 9],
  ["10♥", 10],
  ["A♠", 11],
  ["J♣", 10],
  ["Q♦", 10],
  ["K♥", 10],
])("returns the value of %s", (card, expectedValue) => {
  expect(getCardValue(card)).toEqual(expectedValue);
});

const ranks = [
  ["A", 11],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["10", 10],
  ["J", 10],
  ["Q", 10],
  ["K", 10],
];
const suits = ["♠", "♥", "♦", "♣"];

test.each(
  ranks.flatMap(([rank, expectedValue]) =>
    suits.map((suit) => [`${rank}${suit}`, expectedValue]),
  ),
)("returns the expected value for %s", (card, expectedValue) => {
  expect(getCardValue(card)).toEqual(expectedValue);
});

test.each(["invalid", "1♠", "11♠", "A", "A X", "A🃏"])(
  "rejects invalid card %s",
  (card) => {
    expect(() => getCardValue(card)).toThrow();
  },
);
