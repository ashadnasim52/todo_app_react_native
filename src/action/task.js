import {ADD_TASK, FILTER_TASK, MARK_COMPLETE, REMOVE_TASK} from './action.types';

// Some basics actions and exported those actions

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: id,
});

export const markComplete = id => ({
  type: MARK_COMPLETE,
  payload: id,
});
export const filterTask = categoryName => ({
  type: FILTER_TASK,
  payload: categoryName,
});
