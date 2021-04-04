import React from 'react';
import { useSelector } from 'react-redux';
import { stateInterface } from '../../interface/stateInterface';

import DrawerMenu from '../Topbar/DrawerMenu';

const Drawer = () => {
    const openDrawer = useSelector((state: stateInterface) => state.topbarReducer.openDrawer);
    return (
        openDrawer?
        (
            <div id='drawer-bar'>
                <DrawerMenu />
            </div>
        )
        :<React.Fragment/>
    )
}

export default Drawer;