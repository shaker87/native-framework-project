import * as Types from '../types/Types';

// Initial state
const initialState = {
  isLoading: false,
  status: false,
  logoutStatus: false,
  isLogin: false,
  message: '',
  userData: null,
  data: {},
  tokenData: null,
  inputData: {
    username: '',
    password: '',
  },
};

const LoginReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case Types.AUTH_LOGIN_INPUT_HANDELING:
      const cloneObj = {...state.inputData};
      cloneObj[action.payload.inputName] = action.payload.inputValue;
      return {
        ...state,
        inputData: cloneObj,
      };
    case Types.AUTH_LOGIN_CHECK:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        data: action.payload.data,
        tokenData: action.payload.access_token,
        isLogin: true,
        userData: action.payload.userData,
      };
    case Types.GET_LOGOUT:
      return {
        ...state,
        logoutStatus: true,
        isLogin: false,
        message: '',
        status: false,
        tokenData: null,
        // initialState,
      };
    case Types.EMPTY_LOGIN_MESSAGE:
      return {
        ...state,
        message: '',
      };
    default:
      break;
  }
  return newState;
};

export default LoginReducer;
