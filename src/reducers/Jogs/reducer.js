import { handleActions } from 'redux-actions';

import { actions } from './actions';
import initialState from './initialState';

export default handleActions({
  [actions.SET_JOGS]: (state, payload) => ({
    ...state,
    jogs: payload.payload.jogs
  }),
  [actions.SET_IS_FORM_OPEN]: (state, payload) => ({
    ...state,
    isFormOpen: payload.payload.isOpen
  })
}, initialState);
