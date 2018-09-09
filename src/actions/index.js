import {
  GET_MEMOLIST,
} from './constants';
import api from '../utils/api'

export const getMemoList = () => {
  return {
    type: GET_MEMOLIST,
    payload: api.getInitialMemo()
  }
}
