import * as Types from '../types/Types';
// import * as config from '../../../../app.json';

// import {app_version} from '../../Master/main_config.json';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import * as base_path from '../../../../url.json';

export const inputAddHandling = (inputName, inputValue) => async dispatch => {
  let data = {
    inputName: inputName,
    inputValue: inputValue,
  };
  dispatch({type: Types.AUTH_LOGIN_INPUT_HANDELING, payload: data});
};

export const superUserLogin = postData => async dispatch => {
  const data = {
    username: postData.username,
    password: postData.password,
  };
  const username = data.username;
  const password = data.password;
  let loginResponse = {
    status: false,
    message: '',
    isLoading: true,
    access_token: '',
    userData: null,
    shipUser: null,
    moduleLists: [],
    data: null,
    refresh_token: null,
  };
  dispatch({type: Types.AUTH_LOGIN_CHECK, payload: loginResponse});

  let shipUser = null;
  const url = `${base_path.base_url}oauth/token`;
  try {
    await axios
      .post(url, {
        grant_type: 'password',
        client_id: 3,
        client_secret: 'KzOBW8giRfxkb6WksLUTp8A190Vx1yGyw6CAZFC3',
        username: username,
        password: password,
      })
      .then(async res => {
        const {status, data} = res;
        // let {user} = data;
        loginResponse.access_token = data.access_token;
        loginResponse.data = data;
        loginResponse.status = true;
        loginResponse.refresh_token = data.refresh_token;
        if (status == 200) {
          loginResponse.message = 'Logged in  Successfully';
          loginResponse.userData = data;

          await AsyncStorage.setItem(
            'access_token',
            loginResponse.access_token,
          );
        }
      })
      .catch(async error => {
        console.log(`error`, error);
        loginResponse.message = 'Invalid Username and password';
        loginResponse.status = false;
      });

    const axiosHeader = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
        Authorization: `Bearer ${loginResponse.access_token}`,
      },
    };

    if (loginResponse.status) {
      let url = `${base_path.base_url}connector/api/user/loggedin`;
      try {
        await axios
          .get(`${base_path.base_url}connector/api/user/loggedin`)
          .then(res => {
            loginResponse.userData = res.data.data;
          });
      } catch (error) {
        console.log('errror', error);
      }
    }
    // return false;
    await AsyncStorage.setItem(
      'userData',
      JSON.stringify(loginResponse.userData),
    );
    loginResponse.isLoading = false;
    dispatch({type: Types.AUTH_LOGIN_CHECK, payload: loginResponse});
  } catch (error) {
    loginResponse.isLoading = false;
    loginResponse.message =
      '❌ Network Not Available !\nConnect to Wifi or Internet Connection';
    dispatch({type: Types.AUTH_LOGIN_CHECK, payload: loginResponse});
  }
};

export const getAuthAction = () => async dispatch => {
  let userData = (await AsyncStorage.getItem('userData')) || null;
  let isLoggedIn = false;

  if (userData != null) {
    userData = JSON.parse(userData);
    isLoggedIn = true;
  }
  const payloadData = {
    isLoading: false,
    isLoggedIn: isLoggedIn,
    userData: userData,
  };
  dispatch({type: Types.GET_AUTH_DATA, payload: payloadData});
};
export const logoutAction = () => async dispatch => {
  dispatch({type: Types.GET_LOGOUT, payload: ''});
};
export const emptyMessage = () => dispatch => {
  dispatch({type: Types.EMPTY_LOGIN_MESSAGE, payload: true});
};
