import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'


export const getPosts = () => {
  return axios.get(`${url}/posts`);
}