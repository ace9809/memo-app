import {
  GET_MEMOLIST,
  ADD_MEMO
} from './constants';
import api from '../utils/api'

export const getMemoList = () => {
  return {
    type: GET_MEMOLIST,
    payload: api.getInitialMemo()
  }
}

export const addMemo = () => {
  return {
    type: ADD_MEMO,
    payload: api.createMemo()
  }
}