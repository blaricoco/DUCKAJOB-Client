export const getJobs = async (cb?: any) => {
  fetch('http://localhost:3001/jobs')
    .then((res) => res.json())
    .then((res) => (cb ? cb(res.data) : console.log(res.data)));
};

export const getJobDetails = async (jobId: string, cb?: any) => {
  fetch(`http://localhost:3001/jobs/${jobId}`)
    .then((res) => res.json())
    .then((res) => (cb ? cb(res) : console.log(res)));
};
