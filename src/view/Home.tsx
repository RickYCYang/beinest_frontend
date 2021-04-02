import React from 'react';
import {useParams} from 'react-router';

interface ParamTypes {
    id: string
};

const Home = () => {
    let {id} = useParams<ParamTypes>(); 
    console.log('id', id);
    return (
        <>
            <div className="home">
                Home
            </div>
        </>
    )
}

export default Home;