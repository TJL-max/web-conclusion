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

