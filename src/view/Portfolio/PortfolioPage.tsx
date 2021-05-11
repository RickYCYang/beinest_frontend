import React, {useCallback, useEffect} from 'react';
import {useParams} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioList from './PortfolioList';
import {GET_PORTFOLIO_REQUEST} from '../../redux/actionTypes';
import {stateInterface} from '../../interface/stateInterface'
import {portfolioState} from '../../interface/portfolioInterface'

interface ParamTypes {
    category: string
};

const PortfolioPage = () => {
    const dispatch = useDispatch();
    let {category} = useParams<ParamTypes>(); 
    const portfolioList: portfolioState["portfolioList"] = useSelector((state: stateInterface) => state.portfolioReducer.portfolioList);
    
    let filterPortolioList;
    if(category === 'acne'){
        filterPortolioList = portfolioList.filter(portfolio => portfolio.caption.indexOf('無痛粉刺') > 0)
    }
    else{
        filterPortolioList = portfolioList.filter(portfolio => portfolio.caption.indexOf('無痛粉刺') < 0)
    }
    console.log('filterPortolioList', filterPortolioList);

    useEffect((): void => {
        dispatch({type: GET_PORTFOLIO_REQUEST})
    }, []);
      
    return(
        <PortfolioList 
            category = {category}
            portfolioList = {filterPortolioList}
        />
    );
}

export default PortfolioPage;