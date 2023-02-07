import axios from 'axios';

axios.defaults.baseURL = 'https://petly-mmyb.onrender.com/api';

export const checkEmail = async (emailValue) => {
    await axios.post('auth/checkEmail', {email: emailValue});
}
  