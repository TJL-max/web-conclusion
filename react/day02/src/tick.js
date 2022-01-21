function tick() {
    const element = <div>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleString()}</h2>
    </div>
    ReactDOM.render(element, document.getElementById("app"));
}

setInterval(tick, 1000);