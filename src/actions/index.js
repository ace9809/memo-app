import {
  GET_MEMOLIST,
  GET_MEMO,
  ADD_MEMO
} from './constants';
import api from '../utils/api'

export const getMemoList = () => {
  return {
    type: GET_MEMOLIST,
    payload: api.getInitialMemo()
  }
}

export const getMemo = (id) => {
  return {
    type: GET_MEMO,
    payload: api.getMemo(id)
  }
}

export const addMemo = () => {
  return {
    type: ADD_MEMO,
    payload: api.createMemo()
  }
}

export const modifyMemo = () => {
  return {
    type: MODIFY_MEMO,
    payload: api.modifyMemo()
  }
}