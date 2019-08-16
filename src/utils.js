export function toTop() {
  if (BROWSER) {
    return window.scrollTo(0, 0);
  }
  return null;
}