export const chunk = <T>(input: T[], size: number): T[][] => input.reduce((arr, item, idx) =>
  idx % size
    ? [...arr.slice(0, -1), [...arr.slice(-1)[0], item]]
    : [...arr, [item]]
  , [] as T[][])

