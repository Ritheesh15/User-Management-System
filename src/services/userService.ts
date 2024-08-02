import axios from 'axios';
import { Dispatch } from 'redux'; // Make sure to import from redux
import { ActionType } from '../action-types';
import { UserAction } from '../reducers/userReducer';

export const getUserById = async (id: string, dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: ActionType.USER_LOADING });

    const res = await axios.get(`/api/users/${id}`);

    dispatch({
      type: ActionType.USER_LOADED,
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
      type: ActionType.USER_ERROR,
      payload: errorMessage,
    });
  }
};

// Function to get users
export const getUsers = async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: ActionType.USER_LOADING });

    const res = await axios.get('/api/users');

    dispatch({
      type: ActionType.USER_LOADED,
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
      type: ActionType.USER_ERROR,
      payload: errorMessage,
    });
  }
};

// Function to update user profile
export const updateProfile = async (userData: any, dispatch: Dispatch<UserAction>) => {
  try {
    const res = await axios.put('/api/profile/edit', userData);

    dispatch({
      type: ActionType.USER_LOADED, // Adjust action type if needed
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
      type: ActionType.USER_ERROR, // Adjust action type if needed
      payload: errorMessage,
    });
  }
};
