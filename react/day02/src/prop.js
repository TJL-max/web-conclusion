function Welcome(props) {
    return <div>我是{props.name}</div>
}

function App() {
    return (
        <div>
            <Welcome name="张三" />
            <Welcome name="李四" />
            <Welcome name="王五" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));