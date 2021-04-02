import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import topbarReducer from './topbarReducer';


const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  topbarReducer
});

export default createRootReducer;