import { handleActions } from 'redux-actions';

import { actions } from './actions';
import initialState from './initialState';

export default handleActions({
  [actions.SET_TOKEN]: (state, payload) => ({
    ...state,
    authToken: payload.payload.token
  })
}, initialState);
