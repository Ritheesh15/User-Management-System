import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import { AuthAction } from '../reducers/authReducer';


// Set the token in axios default headers
export const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common ['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};


export const loadUser = async (dispatch: Dispatch<AuthAction>) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch({ type: ActionType.AUTH_LOADING });

    const res = await axios.get('/api/auth');

    dispatch({
      type: ActionType.AUTH_LOADED,
      payload: res.data,
    });
  } catch (err) {
    let errorMessage = 'An unknown error occurred';
    if (axios.isAxiosError(err) && err.response) {
      errorMessage = err.response.data;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    dispatch({
      type: ActionType.AUTH_ERROR,
      payload: errorMessage,
    });
  }
};

export const loginUser = async (dispatch: Dispatch<AuthAction>, credentials: { email: string, password: string }) => {
  try {
    dispatch({ type: ActionType.AUTH_LOADING });

    const res = await axios.post('/api/auth/login', credentials);

    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: res.data,
    });

    setAuthToken(res.data.token);
  } catch (err) {
    let errorMessage = 'An unknown error occurred';
    if (axios.isAxiosError(err) && err.response) {
      errorMessage = err.response.data;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    dispatch({
      type: ActionType.LOGIN_FAIL,
      payload: errorMessage,
    });
  }
};

export const logoutUser = (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: ActionType.LOGOUT });
  setAuthToken(null);
};

// Function to log in a user
export const login = async (credentials: { email: string; password: string }, dispatch: Dispatch<AuthAction>) => {
  try {
    const res = await axios.post('/api/login', credentials);

    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: res.data, // Handle the response data as needed
    });
  } catch (err) {
    let errorMessage = 'An unknown error occurred';
    if (axios.isAxiosError(err) && err.response) {
      errorMessage = err.response.data;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    dispatch({
      type: ActionType.LOGIN_FAIL,
      payload: errorMessage,
    });
  }
};

// Function to register a new user
export const register = async (userData: any, dispatch: Dispatch<AuthAction>) => {
  try {
    const res = await axios.post('/api/register', userData);

    dispatch({
      type: ActionType.REGISTER_SUCCESS,
      payload: res.data, // Handle the response data as needed
    });
  } catch (err) {
    let errorMessage = 'An unknown error occurred';
    if (axios.isAxiosError(err) && err.response) {
      errorMessage = err.response.data;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    dispatch({
      type: ActionType.REGISTER_FAIL,
      payload: errorMessage,
    });
  }
};

