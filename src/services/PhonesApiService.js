import axios from 'axios';

class PhonesApiService {
  getAll() {
    return axios.get(process.env.REACT_APP_API_URL + "/api/phones");
  }

  get(id) {
    return axios.get(process.env.REACT_APP_API_URL + "/api/phones" + id);
  }

  create(data) {
    return axios.post(process.env.REACT_APP_API_URL + "/api/phones", data);
  }

  update(id, data) {
    return axios.put(process.env.REACT_APP_API_URL + "/api/phones/" + id, data)
  }

  delete(id) {
    return axios.delete(process.env.REACT_APP_API_URL + "/api/phones/" + id)
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new PhonesApiService();