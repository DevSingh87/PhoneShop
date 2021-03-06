import axios from "axios";
import { message } from "antd";

const auth_token = localStorage.getItem('auth_token');

// eslint-disable-next-line no-unused-vars
const list = (page) => {
  let url = `/api/v1/mobile_phones?page=${page}`;
  return axios
    .get(url, {
      headers: {
        "Authorization": `${auth_token}`
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return Promise.reject(error.response);
    });
  }

const create = params =>
    axios
      .post(`/api/v1/mobile_phones`, params, {
        headers: {
          "Authorization": `${auth_token}`
        }
      })
      .then(response => {
      return response;
      })
      .catch(error => {
      return Promise.reject(error.response);
      });

// const update = (params, id) =>
//   axios
//     .put(`/api/companies/${id}`, params)
//     .then(response => {
//     return response;
//     })
//     .catch(error => {
//     message.error("Failed to upload!");
//     return Promise.reject(error.response);
//     });


// eslint-disable-next-line import/prefer-default-export
// export { list, show, create, update };
export { list, create };
