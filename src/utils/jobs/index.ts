import { apiUrl } from '../api';

export const getJobs = async (cb?: any) => {
  fetch(`${apiUrl}/jobs`)
    .then((res) => {
      // console.log(res);
      // alert(`isOk:${res.ok}, url:${res.url}, redirected:${res.redirected}, type:${res.type}`);

      return res.json();
    })
    .then((res) => {
      cb ? cb(res.data) : console.log(res.data);
    });
};

export const getJobDetails = async (jobId: string, cb?: any) => {
  fetch(`${apiUrl}/jobs/${jobId}`)
    .then((res) => res.json())
    .then((res) => (cb ? cb(res) : console.log(res)));
};

export const createJob = async (data: any, cb = (res: any) => console.log(res)) => {
  fetch(`${apiUrl}/jobs/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => cb(res));
};
