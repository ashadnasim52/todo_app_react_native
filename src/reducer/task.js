// importing to constant types
import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_COMPLETE,
  FILTER_TASK,
} from '../action/action.types';

//initail state of the app
const initialState = [
  {
    id: 'AaSDra',
    title: 'Buy Milk',
    description: 'Buy from last store of mall',
    priority: 'High',
    category: 'Home',
    date: Date.now(),
    isCompleted: false,
  },
  {
    id: 'AaaZZDasdra',
    title: 'Walk to office',
    description: 'This is a description',
    priority: 'High',
    category: 'Work',
    date: Date.now(),
    isCompleted: true,
  },
  {
    id: 'asdTYU',
    title: 'Walk to Home',
    description: 'This is a description',
    priority: 'High',
    category: 'Home',
    date: Date.now(),
    isCompleted: true,
  },
  {
    id: 'VsdBNM',
    title: 'Buy Clothes',
    description: 'Task Description',
    priority: 'High',
    category: 'Family',
    date: Date.now(),
    isCompleted: false,
  },
  {
    id: 'QWEsRTY',
    title: 'Prepare Dinner',
    description: 'Task Description',
    priority: 'Low',
    category: 'Food',
    date: Date.now(),
    isCompleted: false,
  },
];

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      console.log(state.filter(task => task.id !== action.payload));
      return state.filter(task => task.id !== action.payload);
    case MARK_COMPLETE:
      return state.map(task => {
        if (task.id == action.payload) {
          task.isCompleted = !task.isCompleted;
        }
        console.log(task);
        return task;
      });

    default:
      return state;
  }
};
