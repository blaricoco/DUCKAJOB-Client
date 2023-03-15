import { apiUrl } from '../api';

export const getUserDetails = async (id: string, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => cb(res));
};

export const getUserDetailsByWallet = async (
  wallet: string,
  cb = (res: any) => console.log(res),
) => {
  fetch(`${apiUrl}/users/bywallet/${wallet}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => cb(res.user));
};
