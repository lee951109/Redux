import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import { addTodo } from './redux/actions';

//dispatch 가 발생하는 것 을 감시.
// return이 unsubscribe.
const unsubscribe = store.subscribe(() => { 
  console.log(store.getState());
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
