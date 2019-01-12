import { handleActions } from 'redux-actions';

import { actions } from './actions';
import initialState from './initialState';

export default handleActions({
  [actions.SET_MOBILE_MENU_OPEN]: (state, payload) => ({
    ...state,
    isMobileMenuOpen: payload.payload.isOpen
  })
}, initialState);
