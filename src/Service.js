import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'


export const getPosts = () => {
  return axios.get(`/posts`);
}

export const addPost = (post) => {
  if(post.id){
    return axios.put(`/posts/${post.id}`, post)
  }else{
    return axios.post('/posts', post)
  }
}

export const getPost = (number) => {
  return axios.get(`/posts/${number}`);
}

export const deletePost = (id) => {
  return axios.delete(`/posts/${id}`);
}
