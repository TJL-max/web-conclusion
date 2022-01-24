import React from 'react';

class SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 10}
    }

    // componentDidMount() {
    //     document.getElementById('btn').addEventListener('click', () => {
    //         this.setState({count: this.state.count + 1});
    //         console.log(this.state.count);
    //     })
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('调用了')
    }

    addOne() {
        // this.setState({count: this.state.count + 1});
        this.setState((state, props) => ({
            count: state.count + 1
        }), () => {
            console.log(this.state.count)})
        console.log(1);
        // this.setState({count: this.state.count + 1});
        this.setState((state, props) => ({
            count: state.count + 1
        }), () => {
            console.log(this.state.count)})
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
}

export default SetState;