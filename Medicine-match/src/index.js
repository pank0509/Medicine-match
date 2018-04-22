import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './pages/App';
import Routes from './Routes';
import configureStore from './Redux/configureStore';

const store = configureStore();

ReactDOM.render(
    <HashRouter>
        <MuiThemeProvider>
            <Provider store={store}>
                <Routes />
            </Provider>
        </MuiThemeProvider>
    </HashRouter>,
    document.getElementById('root')
);
