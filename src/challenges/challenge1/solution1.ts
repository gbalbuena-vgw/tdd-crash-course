export function filterEvenNumbers(arr: number[]): number[] {
    const result: number[] = [];
    arr.forEach(num => {
        if (num % 2 == 0) {
            result.push(num);
        }
    });
    
    return result;
}