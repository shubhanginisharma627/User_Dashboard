import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/userActions';

const initialState = {
  loading: false,
  items: [],
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        items: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
