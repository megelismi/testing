import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import NavbarBasic from './components/Navbars/NavbarBasic';
import NavbarSlider from './components/Navbars/NavbarSlider';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <NavbarSlider />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
