'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyleNormalizer = require('react-style-normalizer');

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ReactCompass = function (_React$Component) {
    _inherits(ReactCompass, _React$Component);

    function ReactCompass(props) {
        _classCallCheck(this, ReactCompass);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactCompass).call(this, props));

        _this.oldAngle = 0;
        return _this;
    }

    _createClass(ReactCompass, [{
        key: 'directionName',
        value: function directionName(dir) {
            var sections = this.props.directionNames.length,
                sect = 360 / sections,
                x = Math.floor((dir + sect / 2) / sect);

            x = x >= sections ? 0 : x;

            return this.props.directionNames[x];
        }
    }, {
        key: 'normalizeAngle',
        value: function normalizeAngle(direction) {
            var newAngle = direction,
                rot = this.oldAngle || 0,
                ar = rot % 360;

            while (newAngle < 0) {
                newAngle += 360;
            }
            while (newAngle > 360) {
                newAngle -= 360;
            }
            while (rot < 0) {
                rot += 360;
            }
            while (rot > 360) {
                rot -= 360;
            }

            if (ar < 0) {
                ar += 360;
            }
            if (ar < 180 && newAngle > ar + 180) {
                rot -= 360;
            }
            if (ar >= 180 && newAngle <= ar - 180) {
                rot += 360;
            }

            rot += newAngle - ar;
            this.oldAngle = rot;

            return rot;
        }
    }, {
        key: 'render',
        value: function render() {
            var dir = this.normalizeAngle(this.props.direction),
                name = this.directionName(dir);

            return _react2.default.createElement(
                'div',
                { className: 'compass' },
                _react2.default.createElement(
                    'div',
                    { className: 'compass__windrose',
                        style: (0, _reactStyleNormalizer2.default)({ transform: 'rotate(-' + this.props.direction + 'deg)' }) },
                    [].concat(_toConsumableArray(Array(10))).map(function (k, i) {
                        return _react2.default.createElement('div', { className: 'compass__mark', key: i + 1 });
                    }),
                    _react2.default.createElement('div', { className: 'compass__mark--direction-h' }),
                    _react2.default.createElement('div', { className: 'compass__mark--direction-v' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'compass__arrow-container' },
                    _react2.default.createElement('div', { className: 'compass__arrow' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'compass__labels' },
                        _react2.default.createElement(
                            'span',
                            null,
                            name
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            dir,
                            _react2.default.createElement(
                                'sup',
                                null,
                                'o'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ReactCompass;
}(_react2.default.Component);

ReactCompass.defaultProps = {
    direction: 0,
    directionNames: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
};
ReactCompass.propTypes = {
    direction: _react2.default.PropTypes.number,
    directionNames: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
};
exports.default = ReactCompass;