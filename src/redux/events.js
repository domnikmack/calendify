import axios from 'axios';


const GET_EVENTS = 'GET_EVENTS';
const GET_EVENT = 'GET_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';


export const getEvents = events => {
  return {
    type: GET_EVENTS,
    events
  }
}

export const getEvent = event => {
  return {
    type: GET_EVENT,
    event
  }
}

export const deleteEvent = id => {
  return {
    type: DELETE_EVENT,
    id
  }
}

export const updateEvent = (id, event) => {
  return {
    type: UPDATE_EVENT,
    id,
    event
  }
}


export const fetchEvents = () => {
  return dispatch => {
    return axios.get('/api/events')
      .then(res => res.data)
      .then(events => dispatch(getEvents(events)))
  }
}

export const postEvent = calEvent => {
  return dispatch => {
    return axios.post('/api/events', calEvent)
    .then(res => res.data)
    .then(newEvt => dispatch(getEvent(newEvt)))
  }
}

export const destroyEvent = id => {
  return dispatch => {
    return axios.delete(`/api/events/${id}`)
    .then(dispatch(deleteEvent(id)))
  }
}

export const editEvent = (id, update) => {
  return dispatch => {
    return axios.put(`/api/events/${id}`, update)
    .then(({ data }) => dispatch(updateEvent(data.id, data)))
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case GET_EVENT:
      return [...state, action.event];
    case DELETE_EVENT:
      return state.filter(evt => evt.id !== action.id);
    case UPDATE_EVENT:
      return state.map(evt => evt.id === action.id ? action.event : evt);
    default:
      return state;
  }
}
