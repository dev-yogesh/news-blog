import React, { Fragment } from 'react';
import Search from '../news/Search';
import Category from '../news/Category';
import News from '../news/News';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Category />
      <News />
    </Fragment>
  );
};

export default Home;
