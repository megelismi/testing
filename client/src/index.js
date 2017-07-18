import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import NavbarBasic from './components/Navbars/NavbarBasic';
import NavbarSlider from './components/Navbars/NavbarSlider';
import FancyModalContainer from './components/FancyModalContainer';
import BasicModalContainer from './components/BasicModalContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BasicModalContainer />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
