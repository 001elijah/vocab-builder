export const vocabData = [
  {
    _id: 1,
    en: "a little bit",
    ua: "трохи, трішки",
    progress: 10,
    category: "participle",
    isIrregular: false,
  },
  {
    _id: 2,
    en: "break in",
    ua: "вмішуватися, встрявати",
    progress: 20,
    category: "verb",
    isIrregular: false,
  },
  {
    _id: 3,
    en: "care",
    ua: "турбота, догляд",
    progress: 30,
    category: "noun",
    isIrregular: false,
  },
  {
    _id: 4,
    en: "during",
    ua: "протягом, під час",
    progress: 40,
    category: "participle",
    isIrregular: false,
  },
  {
    _id: 5,
    en: "care",
    ua: "турбота, догляд",
    progress: 50,
    category: "noun",
    isIrregular: false,
  },
  {
    _id: 6,
    en: "during",
    ua: "протягом, під час",
    progress: 60,
    category: "participle",
    isIrregular: false,
  },
  {
    _id: 7,
    en: "a little bit",
    ua: "трохи, трішки",
    progress: 70,
    category: "participle",
    isIrregular: false,
  },
  {
    _id: 8,
    en: "break in",
    ua: "вмішуватися, встрявати",
    progress: 80,
    category: "verb",
    isIrregular: false,
  },
  {
    _id: 9,
    en: "care",
    ua: "турбота, догляд",
    progress: 90,
    category: "noun",
    isIrregular: false,
  },
  {
    _id: 10,
    en: "during",
    ua: "протягом, під час",
    progress: 100,
    category: "participle",
    isIrregular: false,
  },
  {
    _id: 11,
    en: "care",
    ua: "турбота, догляд",
    progress: 65,
    category: "noun",
    isIrregular: false,
  },
  {
    _id: 12,
    en: "During",
    ua: "Протягом, під час",
    progress: 75,
    category: "participle",
    isIrregular: false,
  },
  {
    _id: 13,
    en: "care",
    ua: "турбота, догляд",
    progress: 55,
    category: "noun",
    isIrregular: false,
  },
  {
    _id: 14,
    en: "during",
    ua: "протягом, під час",
    progress: 35,
    category: "participle",
    isIrregular: false,
  },
  {
    _id: 15,
    en: "a little bit",
    ua: "трохи, трішки",
    progress: 25,
    category: "participle",
    isIrregular: false,
  },
];

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
  const { data } = await axios.get("/words/own", null, {
    params: { ...queryParams },
  });
  return data;
};

export const addWord = async ({id}) => {
  const { data } = await axios.post(`/words/add/${id}`);
  return data;
};

export const deleteWord = async ({id}) => {
  const { data } = await axios.delete(`/words/delete/${id}`);
  return data;
};
