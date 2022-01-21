'use strict';

class Elements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>哈哈哈</div>
    }
}

const container = document.querySelector('#app');
ReactDOM.render(<Elements />, container);

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