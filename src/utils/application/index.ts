import { apiUrl } from '../api';

export const applyForJob = async (body: any, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/applications/apply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => cb(res));
};

export const getApplicationByJobAndUser = async (
  body: any,
  cb = (res: any) => console.log(res),
) => {
  fetch(`${apiUrl}/applications/job/${body.jobId}/user/${body.userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => cb(res.data));
};

export const getApplicationsByUser = async (
  userId: string,
  cb = (res: any) => console.log(res),
) => {
  fetch(`${apiUrl}/applications/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => cb(res.data));
};
