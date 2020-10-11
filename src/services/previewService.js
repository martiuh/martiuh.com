import axios from 'axios';

export async function getPreview(url) {
  const { data } = axios.get(url);

  return data;
}
