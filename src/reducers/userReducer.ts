import { ActionType } from '../action-types';

interface UserLoadingAction {
  type: ActionType.USER_LOADING;
}

interface UserLoadedAction {
  type: ActionType.USER_LOADED;
  payload: any[]; 
}

interface UserErrorAction {
  type: ActionType.USER_ERROR;
  payload: string;
}

export type UserAction = UserLoadingAction | UserLoadedAction | UserErrorAction;

export interface UserState {
  users: any[]; 
  user: any | null; 
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  user: null,
  loading: true,
  error: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionType.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.USER_LOADED:
      // You need to handle both cases, depending on what data is loaded
      return {
        ...state,
        users: action.payload, // Handle the list of users
        loading: false,
      };
    case ActionType.USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
