import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Returns the value of number cards", () => {
  assert.equal(getCardValue("2♠"), 2);
  assert.equal(getCardValue("9♠"), 9);
  assert.equal(getCardValue("10♥"), 10);
});

test("Returns the value of aces and face cards", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♦"), 10);
  assert.equal(getCardValue("K♥"), 10);
});

test("Rejects invalid card strings", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
  assert.throws(() => getCardValue("1♠"));
  assert.throws(() => getCardValue("11♠"));
  assert.throws(() => getCardValue("A"));
  assert.throws(() => getCardValue("A X"));
  assert.throws(() => getCardValue("A🃏"));
});
