import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 30
};


const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function() {
    return counterValues;
  },

  emitChange: function() {
    /** EventEmitter对象
     *  nodeJS中的概念，emit方法用于触发事件
     */
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    /**
     * EventEmitter.on()为事件绑定回调函数
     */
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption] ++;
    CounterStore.emitChange();
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption] --;
    CounterStore.emitChange();
  }
});

export default CounterStore;
