export function toTop() {
  if (BROWSER) {
    return window.scrollTo(0, 0);
  }
  return null;
}

export const getProjectImage = url => `/project-images/${url}`;
