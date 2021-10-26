import React from 'react';
import './App.css';
import Router from './router/router';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
