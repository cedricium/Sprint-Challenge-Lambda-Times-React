import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login/Login'

import withAuthenticate from './authenticate'
const Authentication = withAuthenticate(Content)(Login)

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Authentication />
    </div>
  );
}

export default App;
