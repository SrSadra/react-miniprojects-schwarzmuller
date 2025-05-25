import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./store/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <App /> </Provider>); {/*we wrap the parent component and all its child that need to subscribe and dispatch to store in order to access the state */}
