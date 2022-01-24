import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSwitch: true}

        // 为了在回调中使用this，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick = (e) => {
    //     console.log(e)
    //     this.setState(state => ({
    //         isSwitch: !state.isSwitch
    //     }))
    // }

    handleClick(e, num){
        console.log(e, num) // e 1
        this.setState(state => ({
            isSwitch: !state.isSwitch
        }))
    }

    render() {
        console.log(this)
        return (
            <button onClick={(e) => {this.handleClick(e, 1)}}>
                {this.state.isSwitch ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;