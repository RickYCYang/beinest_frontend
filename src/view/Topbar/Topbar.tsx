import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import DrawerButton from './DrawerButton';

const Topbar = () => {
    return (
        <div className="top-bar">
            <DrawerButton />
            <Logo />
            <Menu />
        </div>
    )
}

export default Topbar;