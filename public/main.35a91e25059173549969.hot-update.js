webpackHotUpdate("main",{

/***/ "./src/redux/events.js":
/*!*****************************!*\
  !*** ./src/redux/events.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editEvent = exports.destroyEvent = exports.postEvent = exports.fetchEvents = exports.updateEvent = exports.deleteEvent = exports.getEvent = exports.getEvents = undefined;
exports.default = reducer;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var GET_EVENTS = 'GET_EVENTS';
var GET_EVENT = 'GET_EVENT';
var DELETE_EVENT = 'DELETE_EVENT';
var UPDATE_EVENT = 'UPDATE_EVENT';

var getEvents = exports.getEvents = function getEvents(events) {
  return {
    type: GET_EVENTS,
    events: events
  };
};

var getEvent = exports.getEvent = function getEvent(event) {
  return {
    type: GET_EVENT,
    event: event
  };
};

var deleteEvent = exports.deleteEvent = function deleteEvent(id) {
  return {
    type: DELETE_EVENT,
    id: id
  };
};

var updateEvent = exports.updateEvent = function updateEvent(id, event) {
  return {
    type: UPDATE_EVENT,
    id: id,
    event: event
  };
};

var fetchEvents = exports.fetchEvents = function fetchEvents() {
  return function (dispatch) {
    return _axios2.default.get('/api/events').then(function (res) {
      return res.data;
    }).then(function (events) {
      return dispatch(getEvents(events));
    });
  };
};

var postEvent = exports.postEvent = function postEvent(calEvent) {
  console.log('EVENT IN POST EVENT THUNK', calEvent);
  return function (dispatch) {
    return _axios2.default.post('/api/events', calEvent).then(function (res) {
      return res.data;
    }).then(function (newEvt) {
      return dispatch(getEvent(newEvt));
    });
  };
};

var destroyEvent = exports.destroyEvent = function destroyEvent(id) {
  return function (dispatch) {
    return _axios2.default.delete('/api/events/' + id).then(dispatch(deleteEvent(id)));
  };
};

var editEvent = exports.editEvent = function editEvent(id, update) {
  return function (dispatch) {
    return _axios2.default.put('/api/events/' + id, update).then(function (_ref) {
      var data = _ref.data;
      return dispatch(updateEvent(data.id, data));
    });
  };
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case GET_EVENT:
      return [].concat(_toConsumableArray(state), [action.event]);
    case DELETE_EVENT:
      return state.filter(function (evt) {
        return evt.id !== action.id;
      });
    case UPDATE_EVENT:
      return state.map(function (evt) {
        return evt.id === action.id ? action.event : evt;
      });
    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=main.35a91e25059173549969.hot-update.js.map