import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  memo
});

function memo(state = [], action) {
  console.log('action', action);
  switch(action.type) {
    case 'GET_MEMOLIST':
      return state.concat(action.payload.data);
    default:
      return state

  }

}

export default rootReducer;
