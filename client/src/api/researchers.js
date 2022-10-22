import axios from 'axios';
import { SERVER_BASE_URI } from '../constants/constants';
import { getErrorMessage } from '../utils/getErrorMessage';

export const researcherLogin = async (email, password) => {
  if (!email || !password) return getErrorMessage({});

  try {
    const { data } = axios.post(`${SERVER_BASE_URI}/api/v1/researcher/login`, {
      email,
      password,
    });

    if (data.status === 'success') return { jwt: data.token, researcher: data.data.researcher };

    return getErrorMessage({});
  } catch (error) {
    return getErrorMessage(error);
  }
};

export const applyAsResearcher = async (name, email, password) => {
  if (!name || !email || !password) return false;

  try {
    const { data } = axios.post(`${SERVER_BASE_URI}/api/v1/researcher/apply`, {
      name,
      email,
      password,
    });

    if (data.status === 'success') return { jwt: data.token, researcher: data.data.researcher };

    return getErrorMessage({});
  } catch (error) {
    return getErrorMessage(error);
  }
};
