import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// using thunk middleware
const middleware = [thunk];
import {composeWithDevTools} from 'redux-devtools-extension';

// creating store using root reducer
// and adding dev tools also to use Reactnative standalone dev tool
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
