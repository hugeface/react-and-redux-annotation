import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import CounterStore from './CounterStore.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

/**
 * 在Flux的体系中，有一个全局的Dispatcher，每一个Store都是一个全局唯一的对象
 *
 */
function computeSummary(counterValues) {
  let summary = 0;
  for (const key in counterValues) {
    if (counterValues.hasOwnProperty(key)) {
      summary += counterValues[key];
    }
  }
  return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary: function() {
    return computeSummary(CounterStore.getCounterValues());
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);

  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});


SummaryStore.dispatchToken = AppDispatcher.register((action) => {
  if ((action.type === ActionTypes.INCREMENT) ||
      (action.type === ActionTypes.DECREMENT)) {
    /**
     * 如果两个Store之间有逻辑依赖关系，就必须用上Dispatcher的waitFor函数
     *  1. CounterStore必须要把注册回调函数时产生的dispatchToken公之于众
     *  2. SummaryStore必须在代码里建立对CounterStore的dispatchToken的依赖
     */
    AppDispatcher.waitFor([CounterStore.dispatchToken]);

    SummaryStore.emitChange();
  }
});

export default SummaryStore;

