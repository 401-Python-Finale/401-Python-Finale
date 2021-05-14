// import axios from "axios";

<<<<<<< Updated upstream
// export const apiUrl = ""; // TODO: Update with backend deployed link
=======
// export const apiUrl = "http://0.0.0.0:8000/api/v1/posts/";
export const apiUrl = "http://127.0.0.1:8000/api/v1/posts/"; // TODO: Update with backend deployed link
// export const apiUrl =
//   "https://ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/v1/user/";
>>>>>>> Stashed changes

// export class User {
//   constructor(info) {
//     // TODO: build constructor for info coming in
//   }

//   static fromValues(values) {
//     const info = {
//       // TODO: Not sure what to do here yet :)
//     };

//     return new User(info);
//   }
// }

// get a JSON Web Token from server
export async function getToken(values) {
  //   const url = "http://0.0.0.0:8000/api/token/";
  const url = "http://127.0.0.1:8000/api/token/";
  //   const url =
  //     "https://ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/token/";

  const response = await axios.post(url, values);
  console.log(response.data);

  //   const refreshUrl = "http://0.0.0.0:8000/api/token/refresh/";
  const refreshUrl = "http://127.0.0.1:8000/api/token/refresh/";
  //   const refreshUrl =
  //     "https://ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/token/refresh/";

//   const refreshResponse = await axios.post(refreshUrl, {
//     refresh: response.data.refresh,
//   });

//   return refreshResponse.data.access;
// }

// // GET from API with authentication
// export async function fetchWithToken(url, token) {
//   const config = makeConfig(token);

<<<<<<< Updated upstream
//   const response = await axios.get(url, config);
=======
  const response = await axios.get(url, config);
  console.log(response.data);
>>>>>>> Stashed changes

//   const users = response.data.map((info) => new User(info));

//   return stands;
// }

<<<<<<< Updated upstream
// // POST to API with authentication
// export async function postWithToken(token, values) {
//   const body = {
//     // TODO: Not yet sure what goes here
//   };
=======
// POST to API with authentication
export async function postWithToken(token, values) {
  const body = {
    author: 1,
    post: values.post,
  };
>>>>>>> Stashed changes

//   const config = makeConfig(token);

//   const response = await axios.post(apiUrl, body, config);

<<<<<<< Updated upstream
//   return response.data;
// }

// export async function deleteWithToken(id, token) {
//   const config = makeConfig(token);
=======
  return response;
}

export async function deletePostWithToken(id, token) {
  const config = makeConfig(token);
>>>>>>> Stashed changes

//   const url = apiUrl + id + "/";

//   await axios.delete(url, config);
// }

// // helper function to handle getting Authorization headers EXACTLY right
// function makeConfig(token) {
//   return {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   };
// }
