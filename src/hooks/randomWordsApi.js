const randonWordsApi = {
  method: "GET",
  url: process.env.REACT_APP_URL,
  params: {
    count: "20",
    wordLength: "5",
  },
  headers: {
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  },
};

export default randonWordsApi;
