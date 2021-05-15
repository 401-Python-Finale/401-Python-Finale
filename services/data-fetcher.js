import axios from "axios";

// export const apiUrl = "http://0.0.0.0:8000/api/v1/posts/"; // TODO: Update with backend deployed link
// export const apiUrl = "http://127.0.0.1:8000/api/v1/posts/";
export const apiUrl =
  "https://ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/v1/posts/";

export class Post {
  constructor(info) {
    this.id = info.id;
    this.post = info.post;
    this.created_at = info.created_at;
  }

  static fromValues(values) {
    const info = {
      id: -1,
      post: values.post,
      created_at: values.created_at,
    };

    return new Post(info);
  }
}

export async function getToken(values) {
  //   const url = "http://0.0.0.0:8000/api/token/";
  // const url = "http://127.0.0.1:8000/api/token/";
    const url =
      "https://ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/token/";


  const response = await axios.post(url, values);

  //   const refreshUrl = "http://0.0.0.0:8000/api/token/refresh/";
  // const refreshUrl = "http://127.0.0.1:8000/api/token/refresh/";
    const refreshUrl =
      "https://ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/token/refresh/";


  const refreshResponse = await axios.post(refreshUrl, {
    refresh: response.data.refresh,
  });

  return refreshResponse.data.access;
}

export async function fetchPostsWithToken(url, token) {
  const config = makeConfig(token);

  const response = await axios.get(url, config);

  const posts = response.data.map((info) => new Post(info));

  return posts;
}

export async function postWithToken(token, values) {
  const body = {
    author: 3,
    post: values.post,
  };

  const config = makeConfig(token);

  const response = await axios.post(apiUrl, body, config);

  return response.data;
}

export async function deleteWithToken(id, token) {
  const config = makeConfig(token);

  const url = apiUrl + id + "/";

  await axios.delete(url, config);
}

function makeConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}
