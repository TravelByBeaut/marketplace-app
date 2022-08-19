import axios from "axios";

export const fetchItems = () => {
  return axios
    .get(`https://marketplace-app-fe.herokuapp.com/api/items`)
    .then((res) => {
      return res;
    });
};

export const fetchCategories = () => {
  return axios
    .get(`https://marketplace-app-fe.herokuapp.com/api/categories`)
    .then(({ data }) => {
      return data;
    });
};

export const fetchItemsByCategory = (category_name) => {
  return axios
    .get(
      `https://marketplace-app-fe.herokuapp.com/api/items?category_name=${category_name}`
    )
    .then((res) => {
      return res;
    });
};

export const listItem = (
  item_name,
  description,
  img_url,
  price,
  category_name
) => {
  return axios
    .post(`https://marketplace-app-fe.herokuapp.com/api/items`, {
      item_name: item_name,
      description: description,
      img_url: img_url,
      price: price,
      category_name: category_name,
    })
    .then((res) => {
      return res;
    });
};

const element = document.querySelector("#delete-request .status");
export const deleteItem = (item_id) => {
  return axios
    .delete(`https://marketplace-app-fe.herokuapp.com/api/item/${item_id}`)
    .then(() => (element.innerHTML = "delete successful"));
};
