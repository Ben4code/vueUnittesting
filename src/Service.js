import axios from "axios";



export const getPosts = () => {
  return axios.get(`http://localhost:5000/api/posts`);
};

export const addPost = (post) => {
  if (post._id) {
    return axios.post(`http://localhost:5000/api/posts/update`, post);
  } else {
    return axios.post('http://localhost:5000/api/posts/', post);
  }
};

export const getPost = (number) => {
  return axios.get(`/posts/${number}`);
};

export const deletePost = (id) => {
  return axios.delete(`http://localhost:5000/api/posts/${id}`);
};
