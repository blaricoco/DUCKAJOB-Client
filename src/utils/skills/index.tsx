export const getTags = async (query?: string, cb?: any) => {
  fetch(`http://localhost:3001/tags?name=${query || ''}`)
    .then((res) => res.json())
    .then((res) => cb(res));
};
