import React from 'react';

const NewsItem = ({ article }) => {
  const { title, description, urlToImage, publishedAt, author, url } = article;
  return (
    <div
      className='card text-center'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className='top-news'>
        <img src={urlToImage} alt='news' style={{ width: '300px' }} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='card'>
          <p>{publishedAt}</p>
          <p>{author}</p>
        </div>
      </div>
      <div className='bottom-readme'>
        <a href={url} className='btn btn-primary'>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
