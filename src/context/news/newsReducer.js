import { SHOW_TRADING_NEWS, SEARCH_NEWS, SEARCH_CATEGORY_NEWS } from '../types';

const newsReducer = (state, action) => {
  switch (action.type) {
    case SHOW_TRADING_NEWS:
      return {
        ...state,
        articles: action.payload,
      };
    case SEARCH_NEWS:
      return {
        ...state,
        articles: action.payload,
      };
    case SEARCH_CATEGORY_NEWS:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
