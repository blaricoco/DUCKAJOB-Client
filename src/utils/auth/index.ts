import { apiUrl } from '../api';

export const authUser = async (wallet: string, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/users/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wallet }),
  })
    .then((res) => res.json())
    .then((res) => cb(res));
};

export const registerUser = async (body: any, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => res.success && cb(res));
};
