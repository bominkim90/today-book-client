import axios from '../lib/axios';

export async function getUserInfo() {
  const response = await axios.get('/api/users/me');
  return response.data;
}

export async function logout() {
  const response = await axios.post('/api/auth/logout');
  return response.data;
}
