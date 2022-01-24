var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Count = function (_React$Component) {
    _inherits(Count, _React$Component);

    function Count(props) {
        _classCallCheck(this, Count);

        var _this = _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).call(this, props));

        _this.state = {
            count: 1
        };
        return _this;
    }

    _createClass(Count, [{
        key: 'add',
        value: function add() {
            // this.setState({
            //     count: this.state.count + this.props.num
            // })
            this.setState(function (state, props) {
                return {
                    count: state.count + props.num
                };
            });
            console.log(this.state.count);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                this.state.count,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.add();
                        } },
                    '\u52A01'
                )
            );
        }
    }]);

    return Count;
}(React.Component);

ReactDOM.render(React.createElement(Count, { num: 1 }), document.getElementById('app'));