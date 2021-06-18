import axios from 'axios';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 4330ebfabc654a6992c2aa792f3173a3';

const KEY = '20567405-620e455a5abdf9a1e5e5f188a';

const fetchImages = ({ query = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${ pageSize}`,
  )
      
    .then(response => response.data.hits);
};

export default fetchImages;