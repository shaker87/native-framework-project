import * as types from '../types/types';

const initialState = {
  posts: [],
  post: null,
  postCount: null,
  isLoading: false,
  refresh: false,
  error: false,
  searchedPosts: [],
  form: {
    strProgramTypeName: '',
    ysnActive: '',
  },
};

const postReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.POST_INIT:
      return {...state, ...payload, refresh: false};

    case types.SEARCH_POST:
      const searchedRes = state.posts.filter(post => {
        if (payload.srhVal) {
          return post.strProgramTypeName
            .toLowerCase()
            .includes(payload.srhVal.toLowerCase());
        }
        return false;
      });
      return {
        ...state,
        searchedPosts: searchedRes,
      };

    case types.GET_SINGLE_POST:
      const cloneForm = {...state.form};
      cloneForm.strProgramTypeName = payload.post.strProgramTypeName;
      cloneForm.ysnActive = payload.post.ysnActive;

      return {
        ...state,
        post: payload.post,
        form: cloneForm,
      };

    case types.FORM_INPUT_CHANGE:
      return {
        ...state,
        form: payload.inputVal,
      };

    case types.RESET_FORM:
      return {
        ...state,
        form: initialState.form,
      };

    case types.ADD_PRODUCT:
      const updatedPosts = state.posts.concat(payload.product);
      return {
        ...state,
        posts: updatedPosts,
        postCount: updatedPosts.length,
      };

    case types.REFRESH_POSTS_LIST:
      return {
        ...state,
        refresh: true,
        posts: [],
        postCount: null,
      };

    case types.POST_DELETE_INIT:
      return {
        ...state,
        ...payload,
      };

    case types.POST_DELETE_SUCCESSFUL:
      const postIndex = state.posts.findIndex(
        post => payload.id === post.intProgramTypeId,
      );
      const clonePosts = [...state.posts];
      clonePosts.splice(postIndex, 1);
      return {
        ...state,
        isLoading: false,
        posts: clonePosts,
      };

    case types.POST_DELETE_FAILED:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

// const updateFormInputVal = (form, inputName, inputVal) => {
//   for (const property in form) {
//     if (property === inputName) {
//       form[inputName] = inputVal;
//     }
//   }
//   return form;
// };

export default postReducer;
