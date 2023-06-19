import {combineReducers} from 'redux';
import commonReducer from './slices/common.slices';
import {api} from 'services/api';

const rootReducer = combineReducers({
  common: commonReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
