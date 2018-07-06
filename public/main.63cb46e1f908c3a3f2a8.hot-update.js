webpackHotUpdate("main",{

/***/ "./src/components/CalGrid.js":
/*!***********************************!*\
  !*** ./src/components/CalGrid.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Day = __webpack_require__(/*! ./Day */ "./src/components/Day.js");

var _Day2 = _interopRequireDefault(_Day);

var _Submission = __webpack_require__(/*! ./Submission */ "./src/components/Submission.js");

var _Submission2 = _interopRequireDefault(_Submission);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! ../redux */ "./src/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var createGridDates = function createGridDates(start, end, lastDayPrev, firstSunNext) {
  var dates = [];
  for (var i = start; i <= lastDayPrev; i++) {
    dates.push([5, i]);
  }
  for (var j = 1; j <= end; j++) {
    dates.push([6, j]);
  }
  for (var k = 1; k <= firstSunNext; k++) {
    dates.push([7, k]);
  }
  return dates;
};

var CalGrid = function (_Component) {
  _inherits(CalGrid, _Component);

  function CalGrid(props) {
    _classCallCheck(this, CalGrid);

    var _this = _possibleConstructorReturn(this, (CalGrid.__proto__ || Object.getPrototypeOf(CalGrid)).call(this, props));

    _this.state = {
      showSubmission: false
    };
    _this.openSubmissionForm = _this.openSubmissionForm.bind(_this);
    _this.closeSubmissionForm = _this.closeSubmissionForm.bind(_this);
    return _this;
  }

  _createClass(CalGrid, [{
    key: 'openSubmissionForm',
    value: function openSubmissionForm(evt) {
      evt.preventDefault();
      var month = +evt.target.dataset.month;
      var day = +evt.target.dataset.day;
      var startTime24 = '09:00';
      var endTime24 = '10:00';
      var description = 'New Event';
      this.props.setCurrentEvent({ month: month, day: day, startTime24: startTime24, endTime24: endTime24, description: description });
      this.setState({
        showSubmission: true
      });
    }
  }, {
    key: 'closeSubmissionForm',
    value: function closeSubmissionForm() {
      this.setState({
        showSubmission: false
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchEvents();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var gridDates = createGridDates(28, 30, 31, 1);

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h2',
          { className: 'month' },
          'June 2018'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'calgrid' },
          week.map(function (day) {
            return _react2.default.createElement(
              'h2',
              {
                className: 'weekday',
                key: day },
              day
            );
          }),
          gridDates.map(function (date) {
            return _react2.default.createElement(_Day2.default, {
              day: date,
              events: _this2.props.events.filter(function (event) {
                return event.day === date[1] && event.month === date[0];
              }),
              key: date,
              openSubmit: _this2.openSubmissionForm
            });
          })
        ),
        this.state.showSubmission && _react2.default.createElement(_Submission2.default, { closeSubmit: this.closeSubmissionForm })
      );
    }
  }]);

  return CalGrid;
}(_react.Component);

var mapState = function mapState(state) {
  return {
    events: state.events,
    currentEvent: state.currentEvent
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    fetchEvents: function fetchEvents() {
      dispatch((0, _redux.fetchEvents)());
    },
    setCurrentEvent: function setCurrentEvent(event) {
      dispatch((0, _redux.setCurrentEvent)(event));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(CalGrid);

/***/ })

})
//# sourceMappingURL=main.63cb46e1f908c3a3f2a8.hot-update.js.map