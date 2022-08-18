export const fetchItems = () => {
  return fetch(`https://marketplace-app-fe.herokuapp.com/api/items`).then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchCategories = () => {
  return fetch(`https://marketplace-app-fe.herokuapp.com/api/categories`).then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchItemsByCategory = (category_name) => {
  return fetch(
    `https://marketplace-app-fe.herokuapp.com/api/items?category_name=${category_name}`
  ).then((res) => {
    return res.json();
  });
};

export const listItem = () => {
  return fetch(`https://marketplace-app-fe.herokuapp.com/api/items`, {
    method: "post",
  }).then((res) => {
    return res.json();
  });
};
