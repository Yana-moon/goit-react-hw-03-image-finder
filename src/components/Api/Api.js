import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const searchParams = new URLSearchParams({
  key: '33912044-22b2651672bec86fc9e274e80',
  image_type: 'photo',
  orientation: 'horizontal',
});
export const resultSearch = async ({ searchName, currentPage }) => {
  const response = await axios.get(
    `/?q=${searchName}&${searchParams}&page=${currentPage}&per_page=12`
  );
  return response.data;
};