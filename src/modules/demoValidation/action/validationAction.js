//type for signup
import * as Types from '../types/type';

//input data from user
export const addInputData = value => async dispatch => {
  dispatch({type: Types.ADD_INPUT_DATA, payload: value});
};

//submit data
export const submitData = data => async dispatch => {};
