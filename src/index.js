import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/commun/Header';
import List from './components/list/List';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail'

import './index.css';

const App = () => {

    //const title = 'React Coin';

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={List} exact />
                    <Route path="/currency/:id" component={Detail} exact />
                    <Route component={NotFound} />
                </Switch>
            </div>

        </Router>
    );
}

ReactDom.render(<App />, document.getElementById('root'));