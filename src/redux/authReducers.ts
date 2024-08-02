import { ActionType, AuthAction, AuthState } from './types';

const initialState: AuthState = {
  user: null,
  loading: true,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case ActionType.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.AUTH_LOADED:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case ActionType.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ActionType.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case ActionType.REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case ActionType.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
