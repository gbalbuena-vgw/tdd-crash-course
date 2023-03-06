import { sum } from "./solution3";

test("Given sum, When multiple args, Then return expected sum total", () => {
  expect(sum(1, 2, 3, 4, 5)).toEqual(15);
});
