export function comp(a, b) {
  let result;
  if (a === b) result = 0;
  else if (a > b) result = 1;
  else result = -1;
  return result;
}
