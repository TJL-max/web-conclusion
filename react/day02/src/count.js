
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }

    add() {
        // this.setState({
        //     count: this.state.count + this.props.num
        // })
        this.setState((state, props) => ({
            count: state.count + props.num
        }))
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => {this.add()}}>加1</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Count num={1} />,
    document.getElementById('app')
)