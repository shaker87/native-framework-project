import * as Types from '../types/type';

// Initial state
const initialState = {
  inputData: {
    name: '',
    email: '',
    password: '',
    firstValue: '',
    secondValue: '',
    selectOption: '',
    termsCondition: false,
  },
};

const validationReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case Types.ADD_INPUT_DATA:
      return {
        ...state,
        inputData: action.payload,
      };

    default:
      break;
  }
  return newState;
};

export default validationReducer;
