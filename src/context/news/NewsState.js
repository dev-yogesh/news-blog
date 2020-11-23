import React, { useReducer } from 'react';
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';

import { SHOW_TRADING_NEWS, SEARCH_NEWS, SEARCH_CATEGORY_NEWS } from '../types';

let newsApiKey;

if (process.env.NODE_ENV !== 'production') {
  newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
} else {
  newsApiKey = process.env.NEWS_API_KEY;
}

const NewsState = (props) => {
  const intialState = {
    articles: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, intialState);

  // Show Trading News
  const showNews = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=30&sortBy=popularity&apiKey=${newsApiKey}`
    );

    dispatch({
      type: SHOW_TRADING_NEWS,
      payload: res.data.articles,
    });
  };

  // Search News
  const searchNews = async (text) => {
    const res = await axios.get(
      `http://newsapi.org/v2/everything?q=${text}&sortBy=publishedAt&pageSize=30&apiKey=${newsApiKey}`
    );

    dispatch({
      type: SEARCH_NEWS,
      payload: res.data.articles,
    });
  };

  // Show Category News
  const searchCategory = async (category) => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&sortBy=publishedAt&pageSize=30&apiKey=${newsApiKey}`
    );

    dispatch({
      type: SEARCH_CATEGORY_NEWS,
      payload: res.data.articles,
    });
  };

  return (
    <NewsContext.Provider
      value={{
        articles: state.articles,
        showNews,
        searchNews,
        searchCategory,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
