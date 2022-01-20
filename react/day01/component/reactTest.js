'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You liked comment number ' + this.props.commentId;
        }

        // return e(
        //     'button',
        //     { onClick: () => this.setState({liked: true}) },
        //     'Like'
        // );

        return (
            <button onClick={() => this.setState({liked: true})}>
                Like
            </button>
        )
    }
}

document.querySelectorAll('.app').forEach(item => {
    const commentId = parseInt(item.dataset.commentid, 10);
    ReactDOM.render(e(LikeButton, {commentId: commentId}), item);
})

// const domContainer = document.querySelector('#app');
// ReactDOM.render(e(LikeButton), domContainer);