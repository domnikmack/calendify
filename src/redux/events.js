import axios from 'axios';


const GET_EVENTS = 'GET_EVENTS';
const GET_EVENT = 'GET_EVENT';

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

export const fetchEvents = () => {
  return dispatch => {
    return axios.get('/api/events')
      .then(res => res.data)
      .then(events => dispatch(getEvents(events)))
  }
}

export const postEvent = (calEvent) => {
  return dispatch => {
    return axios.post('/api/events', calEvent)
    .then(res => res.data)
    .then(newEvt => dispatch(getEvent(newEvt)))
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case GET_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
}
