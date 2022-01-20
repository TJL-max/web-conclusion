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

### 

