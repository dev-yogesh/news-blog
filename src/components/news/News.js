import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewsContext from '../../context/news/newsContext';
import NewsItem from './NewsItem';

const News = () => {
  const newsContext = useContext(NewsContext);
  const { articles, showNews } = newsContext;

  useEffect(() => {
    showNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=' grid-3'>
      {articles.map((article) => (
        <NewsItem key={uuidv4()} article={article} />
      ))}
    </div>
  );
};

export default News;
