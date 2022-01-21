function tick() {
    var element = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Hello World!"
        ),
        React.createElement(
            "h2",
            null,
            "It is ",
            new Date().toLocaleString()
        )
    );
    ReactDOM.render(element, document.getElementById("app"));
}

setInterval(tick, 1000);