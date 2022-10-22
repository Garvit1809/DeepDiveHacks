import axios from 'axios';
import { SERVER_BASE_URI } from '../constants/constants';
import { getErrorMessage } from '../utils/getErrorMessage';

export const getAllFishes = async () => {
  try {
    const { data } = await axios.get(`${SERVER_BASE_URI}/api/v1/fishes`);

    if (data.status === 'success') return data.data;

    return getErrorMessage({});
  } catch (error) {
    return getErrorMessage(error);
  }
};

export const getOneFish = async (fishId) => {
  try {
    const { data } = await axios.get(`${SERVER_BASE_URI}/api/v1/fishes/${fishId}`);

    if (data.status === 'success') return data.data;
    return getErrorMessage({});
  } catch (error) {
    return getErrorMessage(error);
  }
};

export const createFish = async (fishData) => {};
