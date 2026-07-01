import test from "node:test";
import assert from "node:assert/strict";
import { applyDiscount, divideTotal } from "./calc.js";

test("applyDiscount applies percentage discount", () => {
  assert.equal(applyDiscount(100, 10), 90);
});

test("divideTotal splits total equally", () => {
  assert.equal(divideTotal(100, 4), 25);
});
