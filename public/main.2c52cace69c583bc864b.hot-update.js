webpackHotUpdate("main",{

/***/ "./src/components/day.js":
/*!*******************************!*\
  !*** ./src/components/day.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nvar _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\n\n\nvar Day = function (_Component) {\n  _inherits(Day, _Component);\n\n  function Day(props) {\n    _classCallCheck(this, Day);\n\n    var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, props));\n\n    _this.handleDelete = _this.handleDelete.bind(_this);\n    _this.handleEdite = _this.handleEdit.bind(_this);\n    return _this;\n  }\n\n  _createClass(Day, [{\n    key: 'truncateDescription',\n    value: function truncateDescription(description) {\n      if (description.length > 24) {\n        return description.slice(0, 24) + '...';\n      }\n      return description;\n    }\n  }, {\n    key: 'sortEvents',\n    value: function sortEvents(events) {\n      var _this2 = this;\n\n      return events.sort(function (a, b) {\n        return _this2.timeInt(a.startTime24) - _this2.timeInt(b.startTime24);\n      });\n    }\n  }, {\n    key: 'timeInt',\n    value: function timeInt(time) {\n      return parseInt(time.slice(0, 2) + time.slice(-2));\n    }\n\n    // handleClick(evt) {\n    //   // console.log('EVT', evt)\n    //   evt.stopProgagation();\n    //   evt.nativeEvent.stopImmediatePropagation();\n    //   console.log('CLICKED');\n    // }\n\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(evt) {\n      evt.stopProgagation();\n      // evt.nativeEvent.stopImmediatePropagation();\n\n      console.log('DELETE');\n    }\n  }, {\n    key: 'handleEdit',\n    value: function handleEdit(evt) {\n      evt.stopProgagation();\n      // evt.nativeEvent.stopImmediatePropagation();\n      CONSOLE.LOG('EDIT');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _props = this.props,\n          day = _props.day,\n          openSubmit = _props.openSubmit;\n\n      var events = this.sortEvents(this.props.events);\n\n      return _react2.default.createElement(\n        'div',\n        {\n          style: {\n            width: 'auto',\n            height: '10rem',\n            margin: '0',\n            padding: '.3rem',\n            fontSize: '1rem',\n            fontWeight: 'bold',\n            backgroundColor: 'rgba(255,255,255, 0.4)',\n            color: 'white',\n            boxShadow: '5px 5px 10px 1px rgba(0, 0, 0, .3)',\n            cursor: 'pointer'\n          },\n          'data-day': day,\n          onClick: openSubmit\n        },\n        _react2.default.createElement(\n          'p',\n          { className: 'day-number' },\n          day\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'event-month-view' },\n          events.map(function (e) {\n            return _react2.default.createElement(\n              'li',\n              { className: 'single-event' },\n              _react2.default.createElement(\n                'div',\n                { className: 'single-event-header' },\n                e.startTime,\n                ' - ',\n                e.endTime,\n                _react2.default.createElement(\n                  'div',\n                  { className: 'event-icons' },\n                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { className: 'icon', icon: _freeSolidSvgIcons.faPencilAlt, onClick: function onClick() {\n                      return _this3.handleDelete(evt);\n                    } }),\n                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { className: 'icon', icon: _freeSolidSvgIcons.faTrash, onClick: function onClick() {\n                      return _this3.handleEdit(evt);\n                    } })\n                )\n              ),\n              _this3.truncateDescription(e.description)\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return Day;\n}(_react.Component);\n\nexports.default = Day;\n\n//# sourceURL=webpack:///./src/components/day.js?");

/***/ })

})