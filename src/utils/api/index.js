/**
 * Created by Ace on 2018. 9. 9..
 */
import axios from 'axios';

export default {
  getInitialMemo() {
   return axios.get('http://114.207.113.7:11111/memo-list/');
  },
  createMemo() {
    return axios.post('http://114.207.113.7:11111/memo-list/create/');
  }
}