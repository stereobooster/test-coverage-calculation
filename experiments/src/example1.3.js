export function experiment(a, b) {
  let result = 0;
  if (a) result += 1;
  if (b) result += 2;
  return result;
}