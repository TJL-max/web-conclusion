'use strict';

class TestPresets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }

    render() {
        if (this.state.liked) {
            return '点击了';
        }

        return (
            <button onClick={() => {this.setState({liked: true})}}>
                Liked
            </button>
        )
    }
}

const dom = document.querySelector('#app');
console.log('----------')
ReactDOM.render(<TestPresets />, dom)