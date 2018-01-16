import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import profile from './profile';
import error from './error';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  profile, 
  error
});

export default rootReducer;
