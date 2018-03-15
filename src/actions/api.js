import axios from 'axios';

const getProfile = () => (
  axios.get('http://i-telekom.ru/bd.php?action=9285cfea484828e411e78807261381cc')
);

// const postExample = name => (
//   axios({
//     method: 'post',
//     url: 'http://localhost:1337/api/v1/artists',
//     data: {
//       name,
//     },
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
// );

export { getProfile };
