import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import topbarReducer from './topbarReducer';
import portfolioReducer from './portfolioReducer';


const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  topbarReducer,
  portfolioReducer
});

export default createRootReducer;