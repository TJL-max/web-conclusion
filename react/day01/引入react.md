# 认识react

React，用于构建用户界面的 JavaScript 库，提供了 UI 层面的解决方案

遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效

使用虚拟`DOM`来有效地操作`DOM`，遵循从高阶组件到低阶组件的单向数据流

帮助我们将界面成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面

`react` 类组件使用一个名为 `render()` 的方法或者函数组件`return`，接收输入的数据并返回需要展示的内容

## react的基本使用

1. 创建一个容器在`body`中

   ```html
   <div id="app"></div>
   ```

2. 加载`react`

   ```html
   <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
     <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
   ```

3. 创建自己的组件(类组件)，加载到页面

   ```html
   <!--    引入自己的组件-->
   <script src="./component/reactTest.js"></script>
   ```

4. 入门代码

   ```js
   'use strict';
   
   const e = React.createElement;
   
   class LikeButton extends React.Component {
       constructor(props) {
           super(props);
           this.state = {liked: false};
       }
   
       render() {
           if (this.state.liked) {
               return 'You liked this';
           }
   
           return e(
               'button',
               { onClick: () => this.setState({liked: true}) },
               'Like'
           );
       }
   }
   
   // 将内容添加到页面
   const domContainer = document.querySelector('#app');
   ReactDOM.render(e(LikeButton), domContainer);
   ```

## 组件重用

1. 将页面添加几个容器

   ```html
   <div class="app" data-commentid="1"></div>
   <div class="app" data-commentid="2"></div>
   <div class="app" data-commentid="3"></div>
   ```

2. 组件内容如下，其实就是获取到3个节点并分别向其渲染，使用到了`e`的第二个参数传参

   ```js
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
   
           return e(
               'button',
               { onClick: () => this.setState({liked: true}) },
               'Like'
           );
       }
   }
   
   document.querySelectorAll('.app').forEach(item => {
       const commentId = parseInt(item.dataset.commentid, 10);
       ReactDOM.render(e(LikeButton, {commentId: commentId}), item);
   })
   ```

## 为生产环境压缩 JavaScript 代码

> 确保已安装`node`环境

1. `npm init -y`，初始化项目
2. `npm install terser`
3. `npx terser -c -m -o reactTest.min.js -- reactTest.js`

4. 替换`html`中的加载`react`为如下代码

   ```html
   <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
   <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
   ```


## 尝试jsx

1. 引入

   ```html
   <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
   ```

2. 在加载自己的标签上添加`type="text/babel"`

   ```html
   <script src="./component/reactTest.js" type="text/babel"></script>
   ```

3. 修改组件内容为

   ```js
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
   ```

## 配置`jsx`到项目



1. 安装`jsx`预处理器

   `npm install babel-cli@6 babel-preset-react-app@3`

2. 创建一个名为 `src` 的文件夹并执行这个终端命令

   `npx babel --watch src --out-dir . --presets react-app/prod`

```html
<div id="app"></div>

<!-- 加载 React。-->
<!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

// 转义过后的文件
<script src="testPresets.js"></script>
```

![image-20220120112718751](https://cdn.jsdelivr.net/gh/TJL-max/mycdn/img/image-20220120112718751.png)

> 记录一个引入错误，属于`js`报错，引入错误

![image-20220120113043377](https://cdn.jsdelivr.net/gh/TJL-max/mycdn/img/image-20220120113043377.png)

> 之前引入的编译目录下的文件，所以报了这个错，后来引入编译后的文件前边加了`.`，同样报了这个错误
>
> 文件转义后生成到了根目录下，属于公共资源，所以前边不需要加任何相对路经，直接引入文件即可

```html
<script src="./testPresets.js"></script> // 错误
<script src="testPresets.js"></script>
```





