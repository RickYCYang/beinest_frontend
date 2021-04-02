import React from 'react';
import { useSelector } from 'react-redux';
import { stateInterface } from '../interface/stateInterface';

const Drawer = () => {
    const openDrawer = useSelector((state: stateInterface) => state.topbarReducer.openDrawer);
    return (
        openDrawer?
        <div id='drawer-bar'>
            Hello World
        </div>
        :<React.Fragment/>
    )
}

export default Drawer;