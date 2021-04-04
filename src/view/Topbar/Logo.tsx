import React from 'react';
import {useDispatch} from 'react-redux'
import { push } from 'connected-react-router';

const background = require('../../images/logo2.png');

const Logo = () => {
    const dispatch = useDispatch();
    return (
        <div className='logo-area'>
            <img 
                className='logo' 
                src={background} 
                alt='logo'
                onClick={() => {dispatch(push('/'))}}
            />
            <span 
                id='store-title'
                onClick={() => {dispatch(push('/'))}}
            >
                BEI'S NEST
            </span>
        </div>
    )
}

export default Logo;