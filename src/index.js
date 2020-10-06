import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Overview from './containers/App';
import { Provider } from 'react-redux'
import createOurStore from './store/configureStore'
import data from './data/test.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const store = createOurStore(data)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
  <React.StrictMode>
    <Switch>
        <Route path="/">
             <Overview />
        </Route>
    </Switch>
  </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
