import axios from 'axios';
let url = 'http://localhost:5000/api';
if (process.env.NODE_ENV === 'production') {
  url = '/api';
}
export default axios.create({
  baseURL: url,
});

// let myURL = 'http://localhost:3000/api';
// if (process.env.NODE_ENV === 'production') {
//   myURL = '/';
// }

// import axios from 'axios';
