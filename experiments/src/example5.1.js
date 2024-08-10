export function experiment(a, b) {
  try {
    encodeURI(a);
    "a".repeat(b);
    return true;
  } catch (_) {
    return false;
  }
}
