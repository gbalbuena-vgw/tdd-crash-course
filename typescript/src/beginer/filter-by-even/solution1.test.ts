import { filterByEven } from "./solution1";

test('Given [1,2,3], When filter by even, Then get only [2]', () => {
    expect(filterByEven([1,2,3])).toEqual([2]);
});