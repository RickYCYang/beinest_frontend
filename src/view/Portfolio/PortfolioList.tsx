import React from 'react';

import PortfolioCard from './Components/PortfolioCard';
import {portfolioState, portfolio} from '../../interface/portfolioInterface';
import PortfolioModal from './Components/PortfolioModal';

interface propsType {
    portfolioList: portfolioState['portfolioList'],
    category?: string
};

const PortfolioList = (props: propsType) => {
    const {category, portfolioList} = props;
    const setPortfolioCardList = () => {
        return portfolioList.map((portfolio: portfolio) => {
            return (<PortfolioCard 
                        key={portfolio.id} 
                        portfolio={portfolio}
                    />
                    );
        });
    };

    const paddingBottomOffset = (category === null || category === undefined)? '0': '100px';

    return (
        <>
            <div className='portfolio-container'>
                <div 
                    className='portfolio-list'
                    style={{paddingBottom: paddingBottomOffset}}
                >
                    {setPortfolioCardList()}
                </div>
            </div>
            <PortfolioModal/>
        </>
    )
}

export default PortfolioList;
