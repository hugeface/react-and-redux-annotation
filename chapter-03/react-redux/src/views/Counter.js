import React, { PropTypes } from 'react';
import * as Actions from '../Actions.js';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

function Counter({caption, onIncrement, onDecrement, value}) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

/**
 * connect()执行的结果依然是一个函数，所以才可以在后面又加一个圆括号，把connect函数执行的结果立刻执行
 *
 * 完成两件事：
 *  1、把Store上的状态转化为内层傻瓜组件的prop - 内层傻瓜对象的输入
 *  2、把内层傻瓜组件中的用户动作转化为派送给Store的动作 - 内层傻瓜对象的输出
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

