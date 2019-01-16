import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-ff4eb.firebaseio.com'
});

export default instance;