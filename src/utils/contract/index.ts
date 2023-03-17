import { apiUrl } from '../api';

export const createContractDB = async (data: any, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/contracts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => cb(res.data));
};

export const getContractById = async (id: string, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/contracts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => cb(res.data));
};

export const getContractByUser = async (id: string, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/contracts/user/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => cb(res.data));
};

export const getContractStatus = async (
  contractId: string,
  cb = (res: any) => console.log(res),
) => {
  fetch(`${apiUrl}/contracts/${contractId}/status`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => cb(res.status));
};

export const setContractStatus = async (
  contractId: string,
  status: string,
  cb = (res: any) => console.log(res),
) => {
  fetch(`${apiUrl}/contracts/${contractId}/status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  })
    .then((res) => res.json())
    .then((res) => cb(res));
};
