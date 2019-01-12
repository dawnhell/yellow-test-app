import { combineReducers } from 'redux';

import loginReducer from './Login/reducer';
import jogsReducer from './Jogs/reducer';
import homeReducer from './Home/reducer';

const rootReducers = combineReducers({
  loginStore: loginReducer,
  jogsStore: jogsReducer,
  homeStore: homeReducer
});

export default rootReducers;