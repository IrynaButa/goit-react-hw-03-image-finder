import axios from 'axios';

const KEY = '20567405-620e455a5abdf9a1e5e5f188a';

const fetchImages = ({ query = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${ pageSize}`,
  )
      
    .then(response => response.data.hits);
};

export default fetchImages;