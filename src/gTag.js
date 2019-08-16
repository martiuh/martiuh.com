export default function gTag(event, action, event_data) {
  if (!BROWSER) {
    return null;
  }
  if (typeof gtag === 'function' && process.env.NODE_ENV === 'production') {
    if (!event || !action) {
      return null;
    }

    console.log({ event, action, event_data })
    if (event_data) {
      return gtag(event, action, event_data);
    }
    return gtag(event, action);
  }
  return null;
}
