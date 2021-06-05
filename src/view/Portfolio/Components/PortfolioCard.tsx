import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {SET_PORTFOLIO_MODAL} from '../../../redux/actionTypes'
import Card, {
    CardPrimaryContent,
    CardMedia
} from "@material/react-card";

import  {portfolio} from '../../../interface/portfolioInterface';

interface propsType {
    portfolio: portfolio,
}

const PortfolioCard = (props: propsType) => {
    const dispatch = useDispatch();
    const {portfolio} = props;

    const openPortfolioModal = useCallback(() => {
        dispatch({
            type: SET_PORTFOLIO_MODAL,
            portfolioModal: {
                open: true,
                caption: portfolio.caption,
                mediaUrl: portfolio.mediaUrl,
                mediaType: portfolio.mediaType,
                likeCount: portfolio.likeCount,
                timestamp: portfolio.timestamp
            }
        })
    }, [portfolio]);

    return (
    <div className='portfolio-card' onClick={openPortfolioModal}>        
        <Card>
            <CardPrimaryContent>
                {
                    portfolio.mediaType === 'IMAGE' || portfolio.mediaType === 'CAROUSEL_ALBUM' ? 
                    (
                        <CardMedia 
                            square 
                            imageUrl={portfolio.mediaUrl} 
                        />   
                    ):
                    (  
                        <video controls  className='mdc-card__media' >
                        <source src={portfolio.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    )
                }
                
            </CardPrimaryContent>
            <CardPrimaryContent>
                <div className='portfolio-card-header'>
                    <strong style={{color: 'darkgray'}}>Bei's nest</strong>
                </div>
            </CardPrimaryContent>
        </Card>
    </div>
    );
}

export default PortfolioCard;
