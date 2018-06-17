import createBrowserHistory from 'history/createBrowserHistory'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from "react-router";
import { createStore } from "redux";
import App from './App';
import { Layout } from "./components";
import './index.css';
import { Library } from './pages/Library';
import { rootReducer } from './reducers';

const newWindow: any = window;

const history = createBrowserHistory();
const store = createStore(rootReducer, newWindow.__REDUX_DEVTOOLS_EXTENSION__ && newWindow.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/library" component={Library} />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
