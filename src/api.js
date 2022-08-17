export const fetchItems = () => {
  return fetch(`https://marketplace-app-fe.herokuapp.com/api/items`).then(
    (res) => {
      return res.json();
    }
  );
};
