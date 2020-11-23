import React, { useContext } from 'react';
import NewsContext from '../../context/news/newsContext';

const Category = () => {
  const newsContext = useContext(NewsContext);
  const { searchCategory } = newsContext;

  const onClick = (e) => {
    searchCategory(e.target.value);
  };

  return (
    <div className='category'>
      <button className='btn btn-dark' value='business' onClick={onClick}>
        Bussiness
      </button>
      <button className='btn btn-dark' value='entertainment' onClick={onClick}>
        Entertainment
      </button>
      <button className='btn btn-dark' value='general' onClick={onClick}>
        General
      </button>
      <button className='btn btn-dark' value='health' onClick={onClick}>
        Health
      </button>
      <button className='btn btn-dark' value='science' onClick={onClick}>
        Science
      </button>
      <button className='btn btn-dark' value='sports' onClick={onClick}>
        Sports
      </button>
      <button className='btn btn-dark' value='technology' onClick={onClick}>
        Technology
      </button>
    </div>
  );
};

export default Category;
