import * as Types from '../types/type';

export const inputSet = (inputName, inputValue) => dispatch => {
  let data = {
    inputName: inputName,
    inputValue: inputValue,
  };
  console.log('data :>> ', data);
  dispatch({type: Types.SCANNER_INPUT_CHANGE, payload: data});
};

export const scanItem = item => dispatch => {
  if (item) {
    dispatch({type: Types.SCANNED_ITEM, payload: item});
  }
};
