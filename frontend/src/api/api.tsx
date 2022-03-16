import axios from 'axios';
// let myURL = 'http://localhost:3000/api';
// if (process.env.NODE_ENV === 'production') {
//   myURL = '/';
// }

// import axios from 'axios';

let url = 'http://localhost:5000/api';
if (process.env.NODE_ENV === 'production') {
  url = 'https://velocity-crawler-app.herokuapp.com/api';
}
export default axios.create({
  baseURL: url,
});
