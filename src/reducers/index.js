import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  memo
});

const INITIAL_STATE = { all: [], memo: null}

function memo(state = [], action) {
  console.log('action', action);
  switch(action.type) {
    case 'GET_MEMOLIST':
      return {
        ...state,
        all: action.payload.data
      }
    case 'GET_MEMO':
      return {
        ...state,
        memo: action.payload.data
      }
    case 'ADD_MEMO':
      return {
      ...state,
      all: action.payload.data
    }
    case 'MODIFY_MEMO':
      return {
        ...state,
        memo: action.payload.data
      }
    default:
      return state

  }

}

export default rootReducer;
