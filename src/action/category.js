import {ADD_NEW_CATEGORY} from './action.types';

export const addCategory = categoryName => ({
  type: ADD_NEW_CATEGORY,
  payload: categoryName,
});
