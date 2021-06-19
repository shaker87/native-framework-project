import * as types from '../types/types';
import axios from 'axios';

const url = 'https://iapps.akij.net/asll/public/api/v1/psd';

// get all
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${url}/getProgramType`);
    dispatch({type: types.POST_INIT, payload: {posts: res.data.data}});
  } catch (error) {
    console.log(error);
  }
};

export const searchPost = srhVal => {
  return {
    type: types.SEARCH_POST,
    payload: {
      srhVal: srhVal,
    },
  };
};

export const getSinglePost = post => {
  return {
    type: types.GET_SINGLE_POST,
    payload: {
      post: post,
    },
  };
};

export const setInputVal = inputVal => {
  return {
    type: types.FORM_INPUT_CHANGE,
    payload: {
      inputVal: inputVal,
    },
  };
};

export const formSubmit = formData => async dispatch => {
  try {
    const res = await axios.post(`${url}/programTypeStore`, formData);
    const product = res.data.data;
    dispatch(addProduct(product));
  } catch (error) {
    console.log(error);
  }
};

export const resetForm = () => {
  return {
    type: types.RESET_FORM,
  };
};

export const updatePost = (formData, id) => async dispatch => {
  formData.intProgramTypeId = id;

  try {
    const res = await axios.put(`${url}/programTypeUpdate`, formData);
    const product = res.data.data;
    dispatch(getPosts());
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = postId => async dispatch => {
  try {
    dispatch({type: types.POST_DELETE_INIT, payload: {isLoading: true}});

    const res = await axios.delete(`${url}/programTypeDelete/${postId}`);

    dispatch({
      type: types.POST_DELETE_SUCCESSFUL,
      payload: {id: res.data.data.intProgramTypeId},
    });
  } catch (error) {
    console.log('deletePost error => ', error);
    dispatch({type: types.POST_DELETE_FAILED, payload: {error: true}});
  }
};

const addProduct = product => {
  return {
    type: types.ADD_PRODUCT,
    payload: {
      product: product,
    },
  };
};

export const refreshPosts = () => async dispatch => {
  dispatch({type: types.REFRESH_POSTS_LIST});
  dispatch(getPosts());
};
