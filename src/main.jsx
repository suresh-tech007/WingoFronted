import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App.jsx';
import "./index.css"
import store from "../src/redux/store/store.js";
 
import 'react-toastify/dist/ReactToastify.css';

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
   

        <App />
   
    </Provider>
  </>
);
