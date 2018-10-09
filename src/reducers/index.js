import { combineReducers } from 'redux';
import _ from 'lodash';

const rootReducer = combineReducers({
  memo
});

function memo(state = { all: [], memo: {} } , action) {
  switch(action.type) {
    case 'GET_MEMOLIST':
      return {
        ...state,
        all: _(action.payload.data).clone().reverse()
      };
    case 'GET_MEMO':
      return {
        ...state,
        memo: action.payload.data
      };
    case 'ADD_MEMO':
      return {
      ...state,
      all: [action.payload.data, ...state.all]
    };
    case 'MODIFY_MEMO':
      const updatedAllMemos = _.map(state.all, memo => {
        if(memo.id === action.payload.data.id){
          return { ...memo, ...action.payload.data }
        }
        return memo
      });

      return {
        ...state,
        all: updatedAllMemos,
        memo: action.payload.data
      };
    case 'DELETE_MEMO':
      return {
        ...state,
        all: _.filter(state.all, (memo) => memo.id !== Number(action.payload))
      };
    default:
      return state
  }

}

export default rootReducer;
