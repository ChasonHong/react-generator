import 'core-js/fn/object/assign';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route,browserHistory  } from 'react-router'
import configureStore from './stores/configureStore'
import {App} from './containers/index';
import {syncHistoryWithStore} from 'react-router-redux';


require('normalize.css');
//require('./styles/App.css');

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

history.listen(location=> {
//   console.log('-------BEGIN LOCATION--------');
//   console.log(location)
//   console.log('-------END LOCATION--------');
});

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

//<IndexRoute component={Form}/>
//<Route path="form" component={Form}/>
