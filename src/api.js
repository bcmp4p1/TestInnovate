const BASE_URL = 'https://url';

export const getUserByName = async(userName) => {
  const response = await fetch(`${BASE_URL}/users/${userName}`);

  return response.json();
};
