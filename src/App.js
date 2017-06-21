import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import s from './Container';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import Lobby from './components/Lobby';
import Todo from './components/Todo';
import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <s.Container>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Lobby} />
          <Route path="/game" exact component={() => <h1>Tic Tic Toe</h1>} />
          <Route path="/todo" exact component={Todo} />
          <Route path="/settings" exact component={Settings} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
      </s.Container>
    </Router>
  </Provider>;

export default App;
