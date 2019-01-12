import { combineReducers } from 'redux';

import loginReducer from './Login/reducer';
import jogsReducer from './Jogs/reducer';

const rootReducers = combineReducers({
  loginStore: loginReducer,
  jogsStore: jogsReducer
});

export default rootReducers;