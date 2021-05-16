import React from 'react';

import Container from '../Components/Container';
import PortfolioCard from './Components/PortfolioCard';
import {portfolioState, portfolio} from '../../interface/portfolioInterface';
import PortfolioModal from './Components/PortfolioModal';

interface propsType {
    category: string,
    portfolioList: portfolioState['portfolioList']
};


const PortfolioList = (props: propsType) => {
    const portfolioList = props.portfolioList;

    const setPortfolioCardList = () => {
        return portfolioList.map((portfolio: portfolio) => {
            return (<PortfolioCard 
                         key={portfolio.id} 
                         portfolio={portfolio}
                     />
                   );
        });
    };

    return (
        <>
            <Container align={'center'}>
                <div style={{width: '100%', height: '100%', paddingTop: '20px'}}>
                    {setPortfolioCardList()}
                </div>
            </Container>
            <PortfolioModal/>
        </>
    )
}

export default PortfolioList;
