import React from 'react';
import {render} from 'react-dom';
import App from './src/containers/App.jsx';
import {Provider} from "react-redux";
import styles from './styles/styles.scss';
import store from './src/utils/store.js';

render(
    <Provider store={store}>
    <App/>
</Provider>, window.document.getElementById('root'));