import axios from "axios";

export const apiUrl = ""; // TODO: Update with backend deployed link

export class User {
  constructor(info) {
    // TODO: build constructor for info coming in
  }

  static fromValues(values) {
    const info = {
      // TODO: Not sure what to do here yet :)
    };

    return new User(info);
  }
}

// get a JSON Web Token from server
export async function getToken(values) {
  //   const url = "http://0.0.0.0:8000/api/token/";
  const url =
    "ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/token/";

  const response = await axios.post(url, values);

  //   const refreshUrl = "http://0.0.0.0:8000/api/token/refresh/";
  const refreshUrl =
    "ec2-18-218-101-248.us-east-2.compute.amazonaws.com:8000/api/token/refresh/";

  const refreshResponse = await axios.post(refreshUrl, {
    refresh: response.data.refresh,
  });

  return refreshResponse.data.access;
}

// GET from API with authentication
export async function fetchWithToken(url, token) {
  const config = makeConfig(token);

  const response = await axios.get(url, config);

  const users = response.data.map((info) => new User(info));

  return stands;
}

// POST to API with authentication
export async function postWithToken(token, values) {
  const body = {
    // TODO: Not yet sure what goes here
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

// helper function to handle getting Authorization headers EXACTLY right
function makeConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}
