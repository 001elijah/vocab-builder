import axios from "axios";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUserApi = async (userData) => {
  const { data } = await axios.post("/users/signup", userData);
  token.set(data.token);
  return { ...data };
};

export const loginUserApi = async (userData) => {
  const { data } = await axios.post("/users/signin", userData);
  token.set(data.token);
  return { ...data };
};

export const currentUserApi = async (userToken) => {
  token.set(userToken);
  const { data } = await axios.get("/users/current");
  token.set(data.token);
  return { ...data };
};

export const logoutUserApi = async (token) => {
  token.set(token);
  await axios.post("/users/signout");
  token.unset();
  return null;
};

//---------------------------------------------Words---------------------//

export const getWordsCategories = async () => {
  const { data } = await axios.get("/words/categories");
  return data;
};

export const createWord = async (newWordData) => {
  const { data } = await axios.post("/words/create", newWordData);
  return data;
};

export const getAllWords = async (queryParams) => {
  // { params: { keyword, category, isIrregular, page, limit } }
  const { data } = await axios.get("/words/all", {
    params: { ...queryParams },
  });
  return data;
};

export const getOwnWords = async (queryParams) => {
  const { data } = await axios.get("/words/own", {
    params: { ...queryParams },
  });
  return data;
};

export const addWord = async ({ id }) => {
  const { data } = await axios.post(`/words/add/${id}`);
  return data;
};

export const deleteWord = async ({ id }) => {
  const { data } = await axios.delete(`/words/delete/${id}`);
  return data;
};

export const editWord = async ({ _id, en, ua, category, isIrregular }) => {
  const { data } = await axios.patch(`/words/edit/${_id}`, {
    en,
    ua,
    category,
    isIrregular,
  });
  return data;
};
