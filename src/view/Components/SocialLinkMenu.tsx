import React from 'react';
const instagramSvg = require('../../images/instagram.svg');
const facebookSvg = require('../../images/facebook.svg');
const lineSvg = require('../../images/line.svg');

const SocialLinkMenu = () => {
    return (
        <div className='social-link-menu'>
            <a href="https://www.instagram.com/beisnest/" target="_blank" rel="noopener noreferrer">
                <img 
                    src={instagramSvg} 
                    className='social-link-icon'
                    alt='instagram-logo'
                />
            </a>
            <a href="https://www.facebook.com/beisnest/" target="_blank" rel="noopener noreferrer">
                <img 
                    src={facebookSvg} 
                    className='social-link-icon'
                    alt='facebook-logo'
                />
            </a>
            <a href="https://line.me/R/ti/p/%40beisnest" target="_blank" rel="noopener noreferrer">
                <img 
                    src={lineSvg} 
                    className='social-link-icon'
                    alt='line-logo'
                />
            </a>
        </div>
    );
}

export default SocialLinkMenu;