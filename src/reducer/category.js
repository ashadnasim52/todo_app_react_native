const initialState = ['Work', 'Family', 'Food', 'Home'];

// will add, remove and mark as complet any season
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ad':
      return [...state, action.payload];

    default:
      return state;
  }
};
