import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';  //for the getting the store values from store to react component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/*so that store can be avilable for entire project*/}
      <App />
    </Provider>
  </React.StrictMode>
);


