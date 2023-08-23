import axios from 'axios';

const API_KEY = '36724264-fe267fbdc66ed4c80a286875f';

export async function fetchImageApi(query, page) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
}
