import * as ActionTypes from './ActionTypes.js';

/**
 * Redux三个基本原则：
 *  1. 唯一的数据源
 *  2. 保持状态只读
 *  3. 数据改变只能通过纯函数完成
 *
 * Redux给开发者增加了很多限制 —— 无节制的灵活度反而让软件难以维护，增加限制是提高软件质量的法门。
 */
export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      /**
       * 相比Flux，Redux多了state。
       * 因为，在Flux的回调函数中，state是由Store管理的，而不是Flux。
       * 但Redux中把存储state的工作抽取出来交给Redux框架本身，让reducer只关心如何更新state。 —— 解绑逻辑和状态
       */
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case ActionTypes.DECREMENT:
    /**
     * 三个句点组成的扩展操作符表示，把state中所有字段扩展开，而后面与counterCaption值对应的字段会赋上新值
     *
     * 扩展操作符并不是ES6语法的一部分，甚至都不是ES Next语法的一部分，但因为其语法简单，已经被广泛使用
     */
    return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
