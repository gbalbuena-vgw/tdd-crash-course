export function sum(...args: number[]) {
  return args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
