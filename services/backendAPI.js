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

export const logoutUserApi = async (userToken) => {
  await axios.post("/users/signout", userToken);
  token.unset();
  return null;
};

//---------------------------------------------BOARDS---------------------//
export const addBoardApi = async (dataBoard, userToken) => {
  token.set(userToken);
  const { data } = await axios.post("/board/", dataBoard);
  return data;
};

export const editBoardApi = async ({ dataBoard, id }, userToken) => {
  token.set(userToken);
  const { data } = await axios.patch(`/board/${id}`, dataBoard);
  return data;
};

export const removeBoardApi = async (id, userToken) => {
  token.set(userToken);
  await axios.delete(`/board/${id}`);
};

export const getBoardByIdApi = async (boardName, userToken) => {
  token.set(userToken);
  const { data } = await axios.get(`/board/${boardName}`);
  return data;
};
export const updateBoardApi = async ({ board, back }, userToken) => {
  token.set(userToken);
  const { data } = await axios.patch(`/board/${board._id}`, {
    background: back,
  });
  return data;
};
export const getListOfBoardsApi = async (userToken) => {
  token.set(userToken);
  const { data } = await axios.get("/board/");
  return data;
};

//---------------------------------------------COLUMNS---------------------//

export const addColumnApi = async (dataColumn, userToken) => {
  token.set(userToken);
  const { data } = await axios.post("/board/column", dataColumn);
  return data;
};
export const editColumnApi = async (
  { title, boardId, columnId },
  userToken
) => {
  token.set(userToken);
  const { data } = await axios.patch(`/board/column/${columnId}`, {
    title,
    boardId,
  });
  return data;
};

export const removeColumnApi = async ({ columnId, boardId }, userToken) => {
  token.set(userToken);
  await axios.delete(`/board/column/${columnId}`, { data: { boardId } });
};

//---------------------------------------------CARDS---------------------//
export const getListOfCardsApi = async (userToken) => {
  token.set(userToken);
  const { data } = await axios.get("/card/");
  return data;
};

export const addCardApi = async (newCard) => {
  const { data } = await axios.post("/card", newCard);
  return data;
};

export const updateCardApi = async (id, cardData) => {
  const { data } = await axios.patch(`/card/${id}`, cardData);
  return data;
};

export const updateCardColumnApi = async (columnData) => {
  const { id: columnId, boardId, cardId } = columnData;
  const { data } = await axios.patch(`/card/column/${cardId}`, {
    boardId,
    columnId,
  });
  return data;
};

export const removeCardApi = async (id) => {
  await axios.delete(`/card/${id}`);
  return;
};

//---------------------------------------------GOOGLE---------------------//
export const authWithGoogleApi = async (data) => {
  const { credential } = data;
  const { idToken } = credential;
  const response = await axios.post("/user/auth/google", {
    credential,
    idToken,
  });
  token.set(response.data.token);
  return { ...response.data.user, token: response.data.token };
};

//---------------------------------------------EMAIL---------------------//

export const sendEmailApi = async (userEmail) => {
  const { data } = await axios.post("/user/sendEmail", userEmail);
  return data.message;
};

//---------------------------------------------BACKGROUND---------------------//
export const getBackgroundThumbnails = async () => {
  const response = await axios.get("board/thumbnails");
  return response.data;
};