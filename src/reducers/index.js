import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  memo
});

function memo(state = {}, action) {
  switch(action.type) {
    case 'GET_MEMOLIST':
      console.log('action', [
      ...state,
      action.payload.data
    ])
      return [
        ...state,
        action.payload.data
      ]
    default:
      return state

  }

}

export default rootReducer;
