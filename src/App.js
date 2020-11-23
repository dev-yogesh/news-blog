import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import NewsState from './context/news/NewsState';

import './App.css';

const App = () => {
  return (
    <NewsState>
      <Router>
        <div>
          <Navbar icon='far fa-newspaper' title='NewsBlog' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </NewsState>
  );
};

export default App;
