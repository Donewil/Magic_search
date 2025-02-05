import { createStore } from 'redux';

const initialState = {
  user: null,
  jobs: [],
  notifications: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
