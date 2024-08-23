

const BASE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json';
const TOKEN_KEY = '9b12fcd879e7e26417eebb8e666ee360';

export async function getItems() {
  // throw new Error('Not bug Mechanic');

  const response = await fetch(`${BASE_URL}?key=${TOKEN_KEY}`, {});
  if(!response.ok) {
    throw new Error('News Load Failed');
  }
  const body = await response.json();
  return body;
}