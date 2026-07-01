import test from "node:test";
import assert from "node:assert/strict";
import { applyDiscount, divideTotal, applyTax, applyDiscountThenTax } from "./calc.js";

test("applyDiscount applies percentage discount", () => {
  assert.equal(applyDiscount(100, 10), 90);
});

test("divideTotal splits total equally", () => {
  assert.equal(divideTotal(100, 4), 25);
});

test("applyTax adds tax to price", () => {
  assert.equal(applyTax(100, 20), 2100);
});

test("applyDiscountThenTax applies discount then tax", () => {
  assert.equal(applyDiscountThenTax(100, 10, 0.1), 99);
});
