# cdn链接

## 开发环境下

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

## 生产环境下

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

## 为什么要使用crossorigin属性？

这样能在 React 16 及以上的版本中有更好的[错误处理体验](https://react.docschina.org/blog/2017/07/26/error-handling-in-react-16.html)。

