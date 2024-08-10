export function experiment(a) {
  let result = 0
  switch (a) {
    case 1:
      result++;
    case 3:
      result++;
    default:
      result++;
  }
  return result;
}
