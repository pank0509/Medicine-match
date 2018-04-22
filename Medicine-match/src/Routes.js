import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import App from './pages/App';
import SearchResult from './pages/SearchResult';
import DetailView from './pages/DetailView';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/card" component={SearchResult} />
        <Route exact path="/detail-view" component={DetailView} />
    </Switch>
);
export default hot(module)(Routes);
