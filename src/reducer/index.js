import {combineReducers} from 'redux';
import task from './task';
import category from './category';

// can add any number of reducers
export default combineReducers({
  tasks: task,
  categories: category,
});
