import React from 'react';
import SocialLinkMenu from './SocialLinkMenu';

const Footer = () => {
    return (
        <div id='footer'>
            <div style={{flex: 1, textAlign: 'center'}}> 
                <SocialLinkMenu />
                <p>Copyright © 2021 Bei's nest. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;