# Challenge #1

Implement a function that takes in an array of numbers and returns an array containing only the even numbers.

Function Signature:
```ts
function filterEvenNumbers(numbers: number[]): number[] {
    // TODO: code here
}
```

## Expectation

```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
filterEvenNumbers([7, 8, 9, 10]); // [8, 10]
filterEvenNumbers([]); // []
```

## Constraints

* The function should not modify the original array.
* The function should not use any built-in array filtering methods like filter().
* The function should only return even numbers.
* The function should handle an empty input array by returning an empty array.
