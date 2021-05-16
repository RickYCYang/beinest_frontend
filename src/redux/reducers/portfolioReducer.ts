import { 
    GET_PORTFOLIO_FAIL,
    GET_PORTFOLIO_SUCCESS,
    SET_PORTFOLIO_MODAL
 } from '../actionTypes';
import {
    portfolioState, 
    portfolio,
    portfolioModal
} from '../../interface/portfolioInterface';

interface action {
    type: string,
    portfolioList: portfolio[],
    portfolioModal: portfolioModal
}

const initState: portfolioState = {
    portfolioList: [],
    portfolioModal: {
        open: false,
        caption: '',
        mediaUrl: '',
        mediaType: '',
        likeCount: 0,
        timestamp: ''
    }
}

const portfolioReducer = (state = initState, action: action): portfolioState => {
    switch(action.type) {
        case GET_PORTFOLIO_FAIL: {
            return {...state};
        }
        case GET_PORTFOLIO_SUCCESS: {
            return {...state, portfolioList: action.portfolioList};
        }
        case SET_PORTFOLIO_MODAL: {
            return {...state, portfolioModal: action.portfolioModal}
        }
        default: return state;
    }
}

export default portfolioReducer;