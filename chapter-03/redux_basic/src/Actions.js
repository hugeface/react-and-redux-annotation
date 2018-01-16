import * as ActionTypes from './ActionTypes.js';

/**
 * 返回一个Action对象，把如何处理这个对象的工作交给调用者
 */
export const increment = (counterCaption) => {
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
