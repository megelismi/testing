import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarBasic from './NavbarBasic';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <NavbarBasic />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
