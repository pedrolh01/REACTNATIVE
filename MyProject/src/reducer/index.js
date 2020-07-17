import {combineReducers} from 'redux';
import app from './app_reducer';
//import user from './user_reducer';
import person from './person_reducer';
import user from './user_reducer';
import vote from './vote_reducer';
const rootReducer = combineReducers({
  app,
  person,
  vote,
  user,
});

export default rootReducer;
