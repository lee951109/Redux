import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import { addTodo, completeTodo, showComplete } from './redux/actions';

//dispatch 가 발생하는 것 을 감시.
// return이 unsubscribe.
store.subscribe(() => { 
  console.log(store.getState());
});

store.dispatch(addTodo("할일"));
store.dispatch(completeTodo(0));
store.dispatch(showComplete());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
