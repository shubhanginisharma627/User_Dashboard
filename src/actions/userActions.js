
import axios from 'axios'

// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action Creators
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

// Thunk to fetch users
export const fetchUsers = () => {
  return async dispatch => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      //console.log("response",response.data)
      return dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      return dispatch(fetchUsersFailure(error));
    }
  };
};
