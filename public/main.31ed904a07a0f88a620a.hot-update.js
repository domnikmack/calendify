webpackHotUpdate("main",{

/***/ "./src/components/Day.js":
/*!*******************************!*\
  !*** ./src/components/Day.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var _redux = __webpack_require__(/*! ../redux */ "./src/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day(props) {
    _classCallCheck(this, Day);

    var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, props));

    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    return _this;
  }

  _createClass(Day, [{
    key: 'truncateDescription',
    value: function truncateDescription(description) {
      if (description.length > 24) {
        return description.slice(0, 24) + '...';
      }
      return description;
    }
  }, {
    key: 'sortEvents',
    value: function sortEvents(events) {
      var _this2 = this;

      return events.sort(function (a, b) {
        return _this2.timeInt(a.startTime24) - _this2.timeInt(b.startTime24);
      });
    }
  }, {
    key: 'timeInt',
    value: function timeInt(time) {
      return parseInt(time.slice(0, 2) + time.slice(-2));
    }
  }, {
    key: 'handleClick',
    value: function handleClick(evt) {
      evt.stopPropagation();
      evt.nativeEvent.stopImmediatePropagation();
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(evt, id) {
      evt.stopPropagation();
      evt.nativeEvent.stopImmediatePropagation();
      this.props.destroyEvent(id);
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(evt, currentEvent) {
      evt.stopPropagation();
      evt.nativeEvent.stopImmediatePropagation();
      this.props.openSubmit(evt);
      this.props.setEvent(currentEvent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          day = _props.day,
          openSubmit = _props.openSubmit;

      var events = this.sortEvents(this.props.events);

      return _react2.default.createElement(
        'div',
        {
          className: 'day'
          /*style={{
            width: 'auto',
            height: '10rem',
            margin: '0',
            padding: '.3rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: 'rgba(255,255,255, 0.4)',
            color: 'white',
            boxShadow: '5px 5px 10px 1px rgba(0, 0, 0, .3)',
            cursor: 'pointer'
          }}*/
          , 'data-month': day[0],
          'data-day': day[1],
          onClick: openSubmit
        },
        _react2.default.createElement(
          'p',
          { className: 'day-number' },
          day[1]
        ),
        _react2.default.createElement(
          'ul',
          { className: 'event-month-view' },
          events.map(function (e) {
            return _react2.default.createElement(
              'li',
              { className: 'single-event', key: e.id, onClick: _this3.handleClick },
              _react2.default.createElement(
                'div',
                { className: 'single-event-header' },
                e.startTime,
                ' - ',
                e.endTime,
                _react2.default.createElement(
                  'div',
                  { className: 'event-icons' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
                    title: 'edit',
                    className: 'icon',
                    icon: _freeSolidSvgIcons.faPencilAlt,
                    onClick: function onClick(evt) {
                      return _this3.handleEdit(evt, e);
                    }
                  }),
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
                    title: 'delete',
                    className: 'icon',
                    icon: _freeSolidSvgIcons.faTrash,
                    onClick: function onClick(evt) {
                      return _this3.handleDelete(evt, e.id);
                    }
                  })
                )
              ),
              _this3.truncateDescription(e.description)
            );
          })
        )
      );
    }
  }]);

  return Day;
}(_react.Component);

var mapState = null;

var mapDispatch = function mapDispatch(dispatch) {
  return {
    destroyEvent: function destroyEvent(event) {
      dispatch((0, _redux.destroyEvent)(event));
    },
    setEvent: function setEvent(eventId) {
      dispatch((0, _redux.setCurrentEvent)(eventId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Day);

/***/ })

})
//# sourceMappingURL=main.31ed904a07a0f88a620a.hot-update.js.map