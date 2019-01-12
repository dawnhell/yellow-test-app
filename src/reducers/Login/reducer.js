import { handleActions } from 'redux-actions';

import { actions } from './actions';

export default handleActions({
  [actions.SET_TOKEN]: (state, payload) => ({
    ...state,
    authToken: payload.token
  })
}, {});
