import { sum } from "./solution2";

test("Given numbers, when multiple args then return expected sum total", () => {
  expect(sum(1, 2)).toEqual(3);
});
