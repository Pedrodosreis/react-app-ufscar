import { combineReducers } from  'redux';

function properties(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function info(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  properties,
  info
});
