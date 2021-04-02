import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import {OPEN_DRAWER} from '../../redux/actionTypes';
import MaterialIcon from '@material/react-material-icon';

const DrawerButton = () => {
    const dispatch = useDispatch();
    const drawerClick = useCallback(() => {
        dispatch({ type: OPEN_DRAWER });
    }, [dispatch]);

    return (
        <MaterialIcon 
            role="button" 
            icon="menu" 
            id="drawer-button" 
            onClick={drawerClick}
        />
    )
}

export default DrawerButton;