const TOAST_OPTIONS = {
  duration: 5000,
  isClosable: true,
  position: 'top',
};

export const SERVER_BASE_URI = 'http://localhost:8000';

export const ERROR_TOAST_OPTIONS = {
  ...TOAST_OPTIONS,
  status: 'error',
};

export const SUCCESS_TOAST_OPTIONS = {
  ...TOAST_OPTIONS,
  status: 'success',
};
