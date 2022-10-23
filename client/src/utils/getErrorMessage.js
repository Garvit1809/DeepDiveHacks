export const getErrorMessage = (error) => [false, error?.response?.data?.message || 'Something went very wrong!'];
