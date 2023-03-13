import { filterByEven } from "./solution2";

test("Given [1,2,3] When filter by even, Then expect [2]", () => {
    expect(filterByEven([1,2,3])).toEqual([2]);
});

test("Given [1,2,3,4,5,6] When filter by even, Then expect [2, 4, 6]", () => {
    expect(filterByEven([1,2,3,4,5,6])).toEqual([2,4,6]);
});

test("Given [2,4,6] When filter by even, Then expect [2, 4, 6]", () => {
    expect(filterByEven([2,4,6])).toEqual([2,4,6]);
});

test("Given [] When filter by even, Then expect []", () => {
    expect(filterByEven([])).toEqual([]);
});
