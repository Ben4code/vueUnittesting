import axios from "axios";

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getPosts = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`);
};

export const addPost = (post) => {
  const options = {
    method: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: post,
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }
  
  if (post.id) {
    options.method = 'PUT'
    return axios(options);
  } else {
    options.method = 'POST'
    return axios(options);

    // return fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify(post),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });

  }
};

export const getPost = (number) => {
  return axios.get(`/posts/${number}`);
};

export const deletePost = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
