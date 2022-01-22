## 自定义元素

```js
const element = <Welcome name="Sara" />;
```

> 当`React`元素为自定义时，他会将jsx所接收的属性以及其子组件（`cgildren`）转换为单个对象传递给组件，这个对象就是`props`

```js
function Welcome(props) {
    return <div>我是{props.name}</div>
}

const element = <Welcome name="佟金龙" />

ReactDOM.render(element, document.getElementById('app'));
```

![image-20220122115933934](https://cdn.jsdelivr.net/gh/TJL-max/mycdn/img/image-20220122115933934.png)

## 组合组件

```JS
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
```

![image-20220122120358078](https://cdn.jsdelivr.net/gh/TJL-max/mycdn/img/image-20220122120358078.png)

## Props的只读性

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**

