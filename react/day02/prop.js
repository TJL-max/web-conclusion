function Welcome(props) {
    return React.createElement(
        "div",
        null,
        "\u6211\u662F",
        props.name
    );
}

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(Welcome, { name: "\u5F20\u4E09" }),
        React.createElement(Welcome, { name: "\u674E\u56DB" }),
        React.createElement(Welcome, { name: "\u738B\u4E94" })
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));