'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ReactCompass = require('./ReactCompass');

var _ReactCompass2 = _interopRequireDefault(_ReactCompass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ReactCompass - a carefully crafted Compass component for React.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/virtyaluk/react-compass
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Bohdan Shtepan
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://modern-dev.com/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ReactApp = function (_React$Component) {
    _inherits(ReactApp, _React$Component);

    function ReactApp() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, ReactApp);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ReactApp)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            rangeVal: 0
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_ReactCompass2.default, { direction: _this.state.rangeVal }),
                _react2.default.createElement('input', { type: 'range', max: '360', min: '0',
                    onChange: _this.rangeOnChange.bind(_this), onInput: _this.rangeOnChange.bind(_this) })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ReactApp, [{
        key: 'rangeOnChange',
        value: function rangeOnChange(e) {
            this.setState({ rangeVal: parseInt(e.target.value, 10) });
        }
    }]);

    return ReactApp;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(ReactApp, null), document.getElementById('app'));