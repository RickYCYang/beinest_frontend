import React from 'react';
import {useParams} from 'react-router';

import Container from '../Components/Container';
import Portfolio from './Components/Portfolio';

interface ParamTypes {
    category: string
};

const PortfolioList = () => {
    let {category} = useParams<ParamTypes>(); 
    return (
        <Container align={'center'}>
            <p>Portfolio: {category} </p>
            <div style={{width: '100%', height: '100%'}}>
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
            </div>
        </Container>
    )
}

export default PortfolioList;