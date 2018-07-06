webpackHotUpdate("main",{

/***/ "./src/components/Submission.js":
/*!**************************************!*\
  !*** ./src/components/Submission.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! ../redux */ "./src/redux/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Submission = function (_Component) {
  _inherits(Submission, _Component);

  function Submission(props) {
    _classCallCheck(this, Submission);

    var _this = _possibleConstructorReturn(this, (Submission.__proto__ || Object.getPrototypeOf(Submission)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleUpdate = _this.handleUpdate.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(Submission, [{
    key: 'handleChange',
    value: function handleChange(evt) {
      this.props.updateCurrentEvent(_defineProperty({}, evt.target.name, evt.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(currentEvent, evt) {
      evt.preventDefault();
      currentEvent.date = (0, _utils.getDate)(currentEvent.month, currentEvent.day);

      this.props.closeSubmit();
      this.props.postEvent(currentEvent);
      this.props.setCurrentEvent({});
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate(currentEvent, evt) {
      var id = currentEvent.id,
          description = currentEvent.description,
          startTime24 = currentEvent.startTime24,
          endTime24 = currentEvent.endTime24;

      evt.preventDefault();
      this.props.closeSubmit();
      this.props.editEvent(id, { description: description, startTime24: startTime24, endTime24: endTime24 });
      this.props.setCurrentEvent({});
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(evt) {
      evt.preventDefault();
      this.props.closeSubmit();
      this.props.setCurrentEvent({});
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var submissionType = void 0;
      var buttonText = void 0;
      var currentEvent = this.props.currentEvent;
      if (currentEvent.id) {
        submissionType = 'Edit Event';
        buttonText = 'Update';
      } else {
        submissionType = 'Create New Event';
        buttonText = 'Submit';
      }

      var month = currentEvent.month,
          day = currentEvent.day,
          _currentEvent$startTi = currentEvent.startTime24,
          startTime24 = _currentEvent$startTi === undefined ? '09:00' : _currentEvent$startTi,
          _currentEvent$endTime = currentEvent.endTime24,
          endTime24 = _currentEvent$endTime === undefined ? '10:00' : _currentEvent$endTime,
          _currentEvent$descrip = currentEvent.description,
          description = _currentEvent$descrip === undefined ? 'New Event' : _currentEvent$descrip;


      return _react2.default.createElement(
        'div',
        { className: 'submission-form' },
        _react2.default.createElement(
          'h2',
          null,
          (0, _utils.getMonthName)(month),
          ' ',
          day,
          ' '
        ),
        _react2.default.createElement(
          'p',
          null,
          submissionType
        ),
        _react2.default.createElement(
          'form',
          {
            onSubmit: submissionType === 'Create New Event' ? function (evt) {
              return _this2.handleSubmit(currentEvent, evt);
            } : function (evt) {
              return _this2.handleUpdate(currentEvent, evt);
            }
          },
          _react2.default.createElement('input', {
            className: 'description-input',
            type: 'text',
            name: 'description',
            value: description,
            placeholder: 'New Event',
            'default': 'New Event',
            onChange: this.handleChange,
            autoFocus: true
          }),
          _react2.default.createElement(
            'label',
            null,
            'Start:',
            _react2.default.createElement('input', {
              className: 'time-input',
              type: 'time',
              value: startTime24,
              'default': '9:00:00',
              name: 'startTime24',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'label',
            null,
            'End:',
            _react2.default.createElement('input', {
              className: 'time-input',
              type: 'time',
              value: endTime24,
              'default': '10:00:00',
              name: 'endTime24',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement('input', { type: 'submit', name: buttonText, value: buttonText }),
          _react2.default.createElement(
            'button',
            { onClick: this.handleCancel },
            'Cancel'
          )
        )
      );
    }
  }]);

  return Submission;
}(_react.Component);

var mapState = function mapState(state) {
  return {
    currentEvent: state.currentEvent
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    updateCurrentEvent: function updateCurrentEvent(event) {
      dispatch((0, _redux.updateCurrentEvent)(event));
    },
    postEvent: function postEvent(event) {
      dispatch((0, _redux.postEvent)(event));
    },
    editEvent: function editEvent(id, update) {
      dispatch((0, _redux.editEvent)(id, update));
    },
    setCurrentEvent: function setCurrentEvent(event) {
      dispatch((0, _redux.setCurrentEvent)(event));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Submission);

/***/ })

})
//# sourceMappingURL=main.55926cc0249acab821ae.hot-update.js.map