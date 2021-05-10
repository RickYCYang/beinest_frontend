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
    let {category} = useParams<ParamTypes>(); 
    const portfolioList: portfolioState["portfolioList"] = useSelector((state: stateInterface) => state.portfolioReducer.portfolioList);
    const dispatch = useDispatch();
    
    useEffect((): void => {
        dispatch({type: GET_PORTFOLIO_REQUEST})
    }, []);
      
    return(
        <PortfolioList 
            category = {category}
            portfolioList = {portfolioList}
        />
    );
}

export default PortfolioPage;