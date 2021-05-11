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

    const loadPortfolioPage = () => {
        dispatch(push(`/portfolio/1`));
    }

    return (
    <div className='portfolio-card'>        
        <Card>
            <CardPrimaryContent>
                {portfolio.mediaType === 'IMAGE' ? (
                    <CardMedia 
                        square 
                        imageUrl={portfolio.mediaUrl} 
                        onClick={loadPortfolioPage}
                    />   
                ):(
                    <iframe 
                        src={portfolio.mediaUrl} 
                        style={{height: '300px', backgroundColor: 'white'}}
                    />
                )
                }
                
            </CardPrimaryContent>
            <CardPrimaryContent>
                <div className='portfolio-card-header' onClick={loadPortfolioPage}>
                    <strong style={{color: 'darkgray'}}>Bei's nest</strong>
                </div>
            </CardPrimaryContent>
        </Card>
    </div>
    );
}

export default PortfolioCard;
