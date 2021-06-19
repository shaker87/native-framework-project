import {combineReducers} from 'redux';
import LoginReducer from '../../modules/auth/reducers/LoginReducer';
import validationReducer from '../../modules/demoValidation/reducer/validationReducer';
import GlobalReducer from './globalReducer/globalReducer';
import postReducer from '../../modules/post/store/reducer/postReducer';
import ScannerReducer from '../../modules/Scanner/reducer/ScannerReducer';

const RootReducer = combineReducers({
  global: GlobalReducer,
  login: LoginReducer,
  post: postReducer,
  validation: validationReducer,
  scanner: ScannerReducer,
});
export default RootReducer;
