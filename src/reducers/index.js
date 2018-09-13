import { combineReducers } from 'redux';
import _ from 'lodash';

const rootReducer = combineReducers({
  memo
});

function memo(state = { all: [], memo: null} , action) {
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
      all: state.all.concat(action.payload.data)
    }
    case 'MODIFY_MEMO':
      return {
        ...state,
        memo: action.payload.data
      }
    case 'DELETE_MEMO':
      return {
        ...state,
        all: _.filter(state.all, (memo) => memo.id !== Number(action.payload))
      }
    default:
      return state

  }

}

export default rootReducer;
