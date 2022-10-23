import axios from 'axios';
import { SERVER_BASE_URI } from '../constants/constants';
import { getErrorMessage } from '../utils/getErrorMessage';

export const researcherLogin = async (email, password) => {
  if (!email || !password) return getErrorMessage([false, 'Please provide all data']);

  try {
    const { data } = await axios.post(`${SERVER_BASE_URI}/api/v1/researcher/login`, {
      email,
      password,
    });

    if (data.status === 'success') return { jwt: data.jwt, researcher: data.data.researcher };

    return getErrorMessage({});
  } catch (error) {
    return getErrorMessage(error);
  }
};

export const applyAsResearcher = async (name, email, password) => {
  if (!name || !email || !password) return getErrorMessage([false, 'Please provide all data']);

  try {
    const { data } = await axios.post(`${SERVER_BASE_URI}/api/v1/researcher/apply`, {
      name,
      email,
      password,
    });

    if (data.status === 'success') return { jwt: data.jwt, researcher: data.data.researcher };

    return getErrorMessage({});
  } catch (error) {
    return getErrorMessage(error);
  }
};
