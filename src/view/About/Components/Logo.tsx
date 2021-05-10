import React from 'react';
const background = require('../../../images/logo.png');

const Logo = () => {
    return (
        <div className='about-logo'>
            <img 
                src={background} 
                alt='logo'
            />
        </div>
    )
}

export default Logo;