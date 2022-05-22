import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

function App() {
  return (
    <Provider store={store} >   
        <Router/>
    </Provider>
    
  );
}

export default App;
