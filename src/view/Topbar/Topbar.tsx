import React from 'react';
import Logo from './Logo';
import TopbarMenu from './TopbarMenu';
import DrawerButton from './DrawerButton';

const Topbar = () => {
    return (
        <div className="topbar">
            <DrawerButton />
            <Logo />
            <TopbarMenu />
        </div>
    )
}

export default Topbar;