# JSX

```js
const element = <h1>Hello, world!</h1>;
```

> 这个标签既不是字符串也不是`HTML`
>
> 它是`jsx`，是一个`javascript`的语法扩展，`react`的语法糖

## 为什么使用JSX

`react`认为渲染逻辑本质上与其他`UI`逻辑内在耦合，比如，在`UI`中需要绑定处理事件、在某些时刻状态发生变化时需要通知到`UI`，以及需要在`UI`中展示准备好的数据。

## 在JSX中嵌入表达式

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

> 在大括号中使用变量

## JSX也是一个表达式

可以在`if`和`for`循环中使用`jsx`，可以将`jsx`当作参数或者从函数中返回`jsx`

## JSX特定属性

1. 使用引号，定义字面量

   ```js
   const element = <div tabIndex="0"></div>;
   ```

2. 使用大括号，定义表达式

   ```js
   const element = <img src={user.avatarUrl}></img>;
   ```

   > `jsx`语法上更接近于`javascript`而不是`HTML`，所以`react`使用小驼峰命名（`camelCase`）

## 使用JSX指定子元素

1. 标签里没有内容时，可以使用单标签
2. 同样能够包含很多子标签

## JSX防止注入攻击

React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 [XSS（cross-site-scripting, 跨站脚本）](https://en.wikipedia.org/wiki/Cross-site_scripting)攻击。

## JSX表示对象

> babel会把JSX转换成一个名为`React.createElement()`函数调用

- 以下两种代码完全等效

  ```js
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
  ```

  ```js
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );
  ```

- 函数执行完创建了这样一个对象

  ```js
  // 注意：这是简化过的结构
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };
  ```

  > 这些对象是`react`元素，`react`读取这些对象，并用他们来构建`dom`并随时保持更新

- 实现`React.createElement`函数

  ```js
  const element = myCreate('div', {className: 'test01', id: 'jjj'}, '示例1', myCreate('button', {onclick: () => {
          console.log(111)}, id: 'btn'}, '点击我'));
  
  function createText(type) {
      return {
          type: 'text',
          props: {
              nodeValue: type,
              children: []
          }
      }
  }
  
  function myCreate (domName, domProperty, ...children) {
      // 讲参数转为对象
      return {
          type: domName,
          props: {
              ...domProperty,
              children: children.map(item => typeof item === 'object' ? item : createText(item))
          }
      }
  }
  ```

- 实现`reactDom.render`方法

  ```js
  function createDom(dom) {
      // 解析虚拟dom
      // 创建dom节点
      const parentDom = document.createElement(dom.type);
      for (const parentDomKey in dom.props) {
          if (parentDomKey !== 'children') {
              parentDom[parentDomKey] = dom.props[parentDomKey];
          }else{
              const childs = dom.props.children;
              for (let i = 0; i < childs.length; i++) {
                  // 子节点是文本节点
                  if (childs[i].type === 'text') {
                      const text = document.createTextNode(childs[i].props.nodeValue);
                      parentDom.appendChild(text);
                  }else{ // 子节点是dom节点
                      parentDom.appendChild(createDom(childs[i]));
                  }
              }
          }
      }
      return parentDom;
  }
  
  function myRender(dom, container) {
      const result = createDom(dom);
      container.appendChild(result);
  }
  
  myRender(element, document.querySelector("#app"));
  ```
