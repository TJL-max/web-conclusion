'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Elements = function (_React$Component) {
    _inherits(Elements, _React$Component);

    function Elements(props) {
        _classCallCheck(this, Elements);

        var _this = _possibleConstructorReturn(this, (Elements.__proto__ || Object.getPrototypeOf(Elements)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Elements, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                '\u54C8\u54C8\u54C8'
            );
        }
    }]);

    return Elements;
}(React.Component);

var container = document.querySelector('#app');
ReactDOM.render(React.createElement(Elements, null), container);

var element = myCreate('div', { className: 'test01', id: 'jjj' }, '示例1', myCreate('button', { onclick: function onclick() {
        console.log(111);
    }, id: 'btn' }, '点击我'));

function createText(type) {
    return {
        type: 'text',
        props: {
            nodeValue: type,
            children: []
        }
    };
}

function myCreate(domName, domProperty) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    // 讲参数转为对象
    return {
        type: domName,
        props: Object.assign({}, domProperty, {
            children: children.map(function (item) {
                return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' ? item : createText(item);
            })
        })
    };
}

function createDom(dom) {
    // 解析虚拟dom
    // 创建dom节点
    var parentDom = document.createElement(dom.type);
    for (var parentDomKey in dom.props) {
        if (parentDomKey !== 'children') {
            parentDom[parentDomKey] = dom.props[parentDomKey];
        } else {
            var childs = dom.props.children;
            for (var i = 0; i < childs.length; i++) {
                // 子节点是文本节点
                if (childs[i].type === 'text') {
                    var text = document.createTextNode(childs[i].props.nodeValue);
                    parentDom.appendChild(text);
                } else {
                    // 子节点是dom节点
                    parentDom.appendChild(createDom(childs[i]));
                }
            }
        }
    }
    return parentDom;
}

function myRender(dom, container) {
    var result = createDom(dom);
    container.appendChild(result);
}

myRender(element, document.querySelector("#app"));