import createBrowserHistory from 'history/createBrowserHistory'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from "react-router";
import App from './App';
import { Layout } from "./components";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Route exact={true} path="/" component={App} />
    </Layout>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
