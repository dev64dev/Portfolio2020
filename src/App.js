import React from 'react';
import Landing from './components/Home/Landing';
import Header from './components/Layout/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Shops from './components/Shops/Shops';
import Navbar from './components/Layout/Navbar/Navbar';
import Blog from './contianers/Blog/Blog';
import Users from './components/Users';
import store from './stroe';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/shops" component={Shops} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/landing" component={Landing} />
    </Provider>
  );
}

export default App;
