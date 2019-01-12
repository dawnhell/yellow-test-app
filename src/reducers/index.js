import { combineReducers } from 'redux';

import loginReducer from './Login/reducer';

const rootReducers = combineReducers({
  loginStore: loginReducer
});

export default rootReducers;