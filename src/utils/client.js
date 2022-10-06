import axios from 'axios';
const host = process.env.REACT_APP_API_URL;

const client = {
    get: (path) => {
      const url = `${host}${path}`;
      const headers = {
        Authorization: `Bearer ${storage.loadStorage()}`,
      };
  
      return axios.get(url, { headers });
    },
  
    post: (path, data) => {
      const url = `${host}${path}`;
      const headers = {
        Authorization: `Bearer ${storage.loadStorage()}`,
      };
  
      return axios.post(url, data, {headers});
    }

}

export default client