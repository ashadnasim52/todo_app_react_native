import {ADD_NEW_CATEGORY} from '../action/action.types';

const initialState = ['Work', 'Family', 'Food', 'Home'];

// will add, remove and mark as complet any season
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY:
      return [...state, action.payload];

    default:
      return state;
  }
};
