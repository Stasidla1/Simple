import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import reportWebVitals from './dont touch/reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ReduxStore';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
)
reportWebVitals();


