import { apiUrl } from '../api';

export const getTags = async (query?: string, cb?: any) => {
  fetch(`${apiUrl}/tags?name=${query || ''}`)
    .then((res) => res.json())
    .then((res) => cb(res));
};
