import { 
    GET_PORTFOLIO_FAIL,
    GET_PORTFOLIO_SUCCESS
 } from '../actionTypes';
import {portfolioState, portfolio} from '../../interface/portfolioInterface';

interface action {
    type: string,
    portfolioList: portfolio[]
}

const initState: portfolioState = {
    portfolioList: []
}

const portfolioReducer = (state = initState, action: action): portfolioState => {
    switch(action.type) {
        case GET_PORTFOLIO_FAIL: {
            return {...state};
        }
        case GET_PORTFOLIO_SUCCESS: {
            console.log('action', action);
            return {...state, portfolioList: action.portfolioList};
        }
        default: return state;
    }
}

export default portfolioReducer;