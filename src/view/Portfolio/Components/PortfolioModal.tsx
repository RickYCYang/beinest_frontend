import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {SET_PORTFOLIO_MODAL} from '../../../redux/actionTypes';
import {stateInterface} from '../../../interface/stateInterface';


const PortfolioModal = () => {
    const {open, caption, mediaUrl, mediaType} = useSelector((state: stateInterface) => state.portfolioReducer.portfolioModal);
    const dispatch = useDispatch();
    const closeModal = useCallback((): void => {
        dispatch({
            type: SET_PORTFOLIO_MODAL,
            portfolioModal: {
                open: false
            }
        })
    }, []);

    let adjustCaption: string = '';
    if(caption){
        adjustCaption = caption.replace(/[\n\r]/g, '<br/>');
    }
    
    return(
        <div className="portfolio-modal" style={{display: (open)? 'block': 'none'}}>
            <span className="portfolio-modal-close-btn" onClick={closeModal}>&times;</span>
            <div className="portfolio-modal-content">
                {(mediaType === 'IMAGE' || mediaType === 'CAROUSEL_ALBUM')?
                    (<img src={mediaUrl} />)
                    :
                    (<iframe src={mediaUrl} />
                    )
                }
                
                <div className="portfolio-modal-caption" dangerouslySetInnerHTML={{ __html: adjustCaption }}/>
            </div>
        </div>
    );
}

export default PortfolioModal;