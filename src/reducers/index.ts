import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer'; // Add other reducers as needed

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
