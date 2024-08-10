export function experiment(a, b, c) {
  let result = 0;
  if (a) result += 1;
  if (b) result += 2;
  if (c) result += 4;
  return result;
}