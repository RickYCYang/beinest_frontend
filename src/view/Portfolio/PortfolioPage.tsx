import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioList from './PortfolioList';
import {GET_PORTFOLIO_REQUEST} from '../../redux/actionTypes';
import {stateInterface} from '../../interface/stateInterface'
import {portfolioState} from '../../interface/portfolioInterface'

interface ParamTypes {
    category: string
};

interface PropsTypes {
    showPostNumber?: number
}

const PortfolioPage = (props: PropsTypes) => {
    const dispatch = useDispatch();
    const {showPostNumber} = props;
    let {category} = useParams<ParamTypes>(); 
    const portfolioList: portfolioState["portfolioList"] = useSelector((state: stateInterface) => state.portfolioReducer.portfolioList);
    
    let filterPortolioList = [];

    switch(category){
        case 'acne': {
            filterPortolioList = portfolioList.filter(portfolio => portfolio.caption.indexOf('無痛粉刺') > 0)
            break;
        }
        case 'all': {
            filterPortolioList = portfolioList;
            break;
        }
        default: {
            filterPortolioList = portfolioList.filter(portfolio => portfolio.caption.indexOf('無痛粉刺') < 0);
            break;
        }
    }
    
    if(showPostNumber !== undefined && showPostNumber > 0){
        filterPortolioList = filterPortolioList.slice(0, 8)
    }
    
    useEffect((): void => {
        dispatch({type: GET_PORTFOLIO_REQUEST})
    }, []);
      
    return(
        <PortfolioList 
            portfolioList = {filterPortolioList}
            category = {category}
        />
    );
}

export default PortfolioPage;