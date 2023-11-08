// React 18 defining pattern 

import React from "react";
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render (
  <Provider store={ store }>
    <App />
  </Provider>
)


// React 17 defining pattern 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );