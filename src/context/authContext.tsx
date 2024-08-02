import React, { createContext, useReducer, ReactNode } from 'react';
import { AuthState, AuthAction } from '../reducers/authReducer';
import authReducer from '../reducers/authReducer';

interface AuthContextProps {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

const initialState: AuthState = {
  auth: null,
  loading: true,
  error: null,
};

export const AuthContext = createContext<AuthContextProps>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
