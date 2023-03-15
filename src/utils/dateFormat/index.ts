export const formatDate = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const sec = Math.round(diff / 1000);
  const min = Math.round(diff / 1000 / 60);
  const hour = Math.round(diff / 1000 / 60 / 60);
  const day = Math.round(diff / 1000 / 60 / 60 / 24);
  if (sec < 60) {
    return `${sec} secs ago`;
  } else if (min < 60) {
    if (min === 1) return `${min} min ago`;
    return `${min} mins ago`;
  } else if (hour < 24) {
    if (hour === 1) return `${hour} hour ago`;
    return `${hour} hours ago`;
  } else if (day < 7) {
    if (day === 1) return `${day} day ago`;

    return `${day} days ago`;
  } else {
    const res = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
    return res;
  }
};
