/*
在使用JSX的代码中，即使代码中没有直接使用React，也一定要导入React，
这是因为JSX最终会被转译成依赖于React的表达式
*/
import React, {Component} from 'react';

class ClickCounter extends Component {
    // ES6 构造函数
    constructor(props) {
        // The parent class' constructor needs to be called before the subclass' constructor.
        // This will ensure that if you call any methods on the parent class in your constructor,
        // the parent class has already been set up correctly.
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count: 0};
    }

    onClickButton() {
        // setState是继承自Component的方法，用于更新组件的state
        this.setState({count: this.state.count + 1});
    }

    // render() {
    //     // JSX语法
    //     return (
    //       <div>
    //           <button onClick={this.onClickButton}>Click Me</button>
    //           <div>
    //               Click Count: {this.state.count}
    //           </div>
    //       </div>
    //     );
    // }

    render() {
        const counterStyle = {
            margin: '16px'
        };

        return (
            <div style={counterStyle}>
                <button onClick={this.onClickButton}>Click Me</button>
                <div>
                    Click Count: <span id="clickCount">{this.state.count}</span>
                </div>
            </div>
        );
    }
}


export default ClickCounter;