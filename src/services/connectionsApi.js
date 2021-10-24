import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = null;
  },
};

export const fetchRegistration = async newUser => {
  try {
    const data = await axios.post('/users/signup', newUser);
    token.set(data.data.token);
    return data;
  } catch (error) {
    throw error.response;
  }
};
