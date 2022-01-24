## state

> `state`是私有的，并完全受控于当前组件

### 时钟案例

```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // 组件加载之后
    componentDidMount() {
        this.time = setInterval(() => this.tick(), 1000);
    }

    // 组件加载之前
    componentWillUnmount() {
        clearInterval(this.time)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('app')
)
```

### 不可以直接修改State

```js
// 错误
this.state.comment = 'Hello';
```

- 使用`this.setState`

```js
this.setState({comment: 'Hello'});
```

### State的更新可能是异步的

- 下面这段代码可能无法更新计数器

  ```js
  this.setState({
      count: this.state.count + this.props.num
  })
  ```

- 解决这个问题，可以将`this.setState`的第一个参数设置为一个函数，函数接受两个参数`state`和`props`

  ```js
  this.setState((state, props) => ({
      count: state.count + props.num
  }))
  ```

  > 也可以使用普通函数

### State的更新会被合并

- 这里的合并是浅合并，完整保留了其他属性，完整喜欢了更新的属性

### 数据是向下流动的，单项数据流

### setState何时同步何时异步？

**由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state** 。

**React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等**。

> 大部分开发中用到的都是React封装的事件，比如onChange、onClick、onTouchMove等，这些事件处理程序中的setState都是异步处理的。

```js
import React from 'react';

class SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 10}
    }

    handleClickOne() {
        this.setState({ count: this.state.count + 1})
        console.log(this.state.count) // 10
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.handleClickOne()}}>clickOne</button>
                <button id="btn">clickTwo</button>
            </div>
        )
    }
}

export default SetState;
```

> 输出10，`this.setState`设置完属性后并没有及时更新，所以`React`原生事件调用该方法后是异步的

```js
import React from 'react';

class SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 10}
    }

    componentDidMount() {
        document.getElementById('btn').addEventListener('click', () => {
            this.setState({count: this.state.count + 1});
            console.log(this.state.count); // 11
        })
    }

    render() {
        return (
            <div>
                <button id={'btn'}>clickOne</button>
            </div>
        )
    }
}

export default SetState;
```

> 输出11，`this.setState`设置完属性后及时更新，同步更新`state`

### 怎样控制异步还是同步呢

在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中延时更新，而 isBatchingUpdates 默认是 false，表示 setState 会同步更新 this.state；但是，有一个函数 batchedUpdates，该函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会先调用这个 batchedUpdates将isBatchingUpdates修改为true，这样由 React 控制的事件处理过程 setState 不会同步更新 this.state。

### 多个Dtate调用会合并处理

```js
addOne() {
    this.setState({count: this.state.count + 1});
    console.log(1);
    this.setState({count: this.state.count + 1});
    console.log(2);
}

render() {
    console.log('render')
    return (
        <div>
            {/*<button id={'btn'}>clickOne</button>*/}
            <button onClick={() => {this.addOne()}}>点我</button>
            <span>{this.state.count}</span>
       </div>
    )
}
```

> 点击按钮的时候执行了两边`this.setState`，但是最终的输出结果只加了1

![image-20220124211845221](https://cdn.jsdelivr.net/gh/TJL-max/mycdn/img/image-20220124211845221.png)

所以`this.setState`产生的多个修改放在了一个队列里进行批延时处理，那如果我就是想调用两次获取到相加两次的结果呢，只需要将`this.setState`的第一个参数设置为一个函数就可以，函数接收两个参数，`state`和`props`，可以是箭头函数，也可以是普通函数

```js
addOne() {
    // this.setState({count: this.state.count + 1});
    this.setState((state, props) => ({
        count: state.count + 1
    }))
    console.log(1);
    // this.setState({count: this.state.count + 1});
    this.setState((state, props) => ({
        count: state.count + 1
    }))
    console.log(2);
}

render() {
    console.log('render')
    return (
        <div>
            {/*<button id={'btn'}>clickOne</button>*/}
            <button onClick={() => {this.addOne()}}>点我</button>
            <span>{this.state.count}</span>
        </div>
	)
}
```

> 点击按钮执行后，结果加了2，是想要的结果

如果现在执行完`this.setState`后，就想拿到执行后的结果，怎么办？

`React`的`this.setState`方法提供了第二个参数，`callback`，该函数会在更新`state`，重新触发`render`后执行，及时拿到更新之后的数据。

























