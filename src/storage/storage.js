export const loadStorage = () => {
  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify(null));

    return null;
  }
  return JSON.parse(localStorage.getItem('user'));
};

export const updateStorage = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
};
