export enum ActionType {
    AUTH_LOADING = 'AUTH_LOADING',
    AUTH_LOADED = 'AUTH_LOADED',
    AUTH_ERROR = 'AUTH_ERROR',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAIL = 'REGISTER_FAIL',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOGOUT = 'LOGOUT',
  }
  
  // Define the User type
  export interface User {
    id: string;
    name: string;
    email: string;
    // Add other user properties as needed
  }
  
  // Define the AuthData type
  export interface AuthData {
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
  
  export interface AuthState {
    user: User | null; // Updated to User type
    loading: boolean;
    error: string | null;
  }
  