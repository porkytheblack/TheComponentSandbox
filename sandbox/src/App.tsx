import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import {QueryClient, QueryClientProvider} from "react-query"

function App() {
  const app_query_client = new QueryClient
  return (
    <Provider store={store} >   
      <QueryClientProvider client={app_query_client} >
        <Router/>
      </QueryClientProvider>
    </Provider>
    
  );
}

export default App;
