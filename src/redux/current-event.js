const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
const UPDATE_CURRENT_EVENT = 'UPDATE_CURRENT_EVENT';

export const setCurrentEvent = event => {
  return {
    type: SET_CURRENT_EVENT,
    event
  }
};

export const updateCurrentEvent = update => {
  return {
    type: UPDATE_CURRENT_EVENT,
    update
  }
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_EVENT:
      return action.event;
    case UPDATE_CURRENT_EVENT:
      var update = action.update;
      return {...state, ...update };
    default:
      return state;
  }
}
