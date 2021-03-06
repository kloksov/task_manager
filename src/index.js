import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './scss/index.scss';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter hashType="slash">
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
