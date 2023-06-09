import { 
  LOGIN_SUCCESS, 
  LOGIN_FAILED, 
  LOGIN_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_LOADING
} from "../../actions/auth.action";

const initialState = {
  loginUserFulfilled: false,
  loginUserRejected: false,
  loginUserLoading: false,
  registerUserFulfilled: false,
  registerUserRejected: false,
  registerUserLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.info(action.payload, '=> dari case LOGIN_SUCCESS');
      return {
        ...state,
        loginUserFulfilled: action.payload
      }
    case LOGIN_FAILED: 
    // console.info(action.payload, '=> dari case LOGIN_FAILED');
    return {
      ...state,
      loginUserRejected: action.payload
    }
    case LOGIN_LOADING:
      // console.info(action.payload, '=> dari case LOGIN_LOADING');
      return {
        ...state,
        loginUserLoading: action.payload
      }
    case REGISTER_SUCCESS:
      // console.info(action.payload, '=> dari case LOGIN_SUCCESS');
      return {
        ...state,
        registerUserFulfilled: action.payload
      }
    case REGISTER_FAILED: 
      // console.info(action.payload, '=> dari case LOGIN_FAILED');
      return {
        ...state,
        registerUserRejected: action.payload
      }
    case REGISTER_LOADING:
      // console.info(action.payload, '=> dari case LOGIN_LOADING');
      return {
        ...state,
        registerUserLoading: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;