
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            times: 0,
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

    addOne() {
        // this.setState({times: this.state.times+1});
        this.setState((state, props) => ({
            times: state.times + 1
        }), () => {
            console.log(this.state.times)
        })
        console.log(this.state.times);
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={() => {this.addOne()}}>点我+1</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('app')
)