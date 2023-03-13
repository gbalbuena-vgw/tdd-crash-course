export function filterByEven(arr: number[]): number[] {
    if (arr.length === 0) {
        throw new Error('empty array is not acceptable');
    }
    return arr.filter(num => num % 2 == 0)
}
