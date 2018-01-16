import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

/**
 * Redux提供createStore函数
 * param_0: 更新状态的reducer
 * param_1: 状态的初始值
 *
 * Store状态设计应避免冗余的数据
 */
const store = createStore(reducer, initValues);

export default store;
