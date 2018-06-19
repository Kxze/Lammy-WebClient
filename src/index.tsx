import createBrowserHistory from 'history/createBrowserHistory'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from "react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from "redux-thunk";
import App from './App';
import { Layout } from "./components";
import './index.css';
import { Library } from './pages/Library';
import { Upload } from './pages/Upload';
import { rootReducer } from './reducers';

declare module 'redux' {
  export type GenericStoreEnhancer = any;
}

const history = createBrowserHistory();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/library" component={Library} />
        <Route exact={true} path="/upload" component={Upload} />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
