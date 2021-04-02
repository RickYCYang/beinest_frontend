import React from 'react';
import {useParams} from 'react-router';

interface ParamTypes {
    category: string
};

const Portfolio = () => {
    let {category} = useParams<ParamTypes>(); 
    return (
        <div>
            Portfolio: {category}
        </div>
    )
}

export default Portfolio;