import { ActionType } from '../action-types';

// Define actual user and authentication data types if available
interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface AuthData {
  token: string;
  user: User;
}

// Action interfaces
interface AuthLoadingAction {
  type: ActionType.AUTH_LOADING;
}

interface AuthLoadedAction {
  type: ActionType.AUTH_LOADED;
  payload: AuthData; // Updated to AuthData type
}

interface AuthErrorAction {
  type: ActionType.AUTH_ERROR;
  payload: string;
}

interface RegisterSuccessAction {
  type: ActionType.REGISTER_SUCCESS;
  payload: User; // Updated to User type
}

interface RegisterFailAction {
  type: ActionType.REGISTER_FAIL;
  payload: string;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: AuthData; // Updated to AuthData type
}

interface LoginFailAction {
  type: ActionType.LOGIN_FAIL;
  payload: string;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction =
  | AuthLoadingAction
  | AuthLoadedAction
  | AuthErrorAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction;

// State interface
export interface AuthState {
  user: User | null; // Updated to User type
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  loading: true,
  error: null,
};

// Reducer function
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
        user: action.payload.user, // Updated to reflect AuthData structure
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
        user: action.payload.user, // Updated to reflect AuthData structure
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
