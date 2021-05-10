import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Card, {
    CardPrimaryContent,
    CardMedia
  } from "@material/react-card";

import  {portfolio} from '../../../interface/portfolioInterface';

interface propsType {
    portfolio: portfolio
}

const PortfolioCard = (props: propsType) => {
    const dispatch = useDispatch();
    const {portfolio} = props;
    console.log(portfolio)

    const loadPortfolioPage = () => {
        console.log('loadPortfolioPage');
        dispatch(push(`/portfolio/1`));
    }

    return (
    <div className='portfolio-card'>        
        <Card>
            <CardPrimaryContent>
                <CardMedia 
                    square 
                    imageUrl={portfolio.mediaUrl} 
                    onClick={loadPortfolioPage}
                />   
            </CardPrimaryContent>
            <CardPrimaryContent>
                <div className='portfolio-card-header' onClick={loadPortfolioPage}>
                    {portfolio.caption}
                </div>
            </CardPrimaryContent>
        </Card>
    </div>
    );
}

export default PortfolioCard;
