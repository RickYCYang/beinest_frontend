import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { OPEN_DRAWER } from '../../redux/actionTypes';
import { stateInterface } from '../../interface/stateInterface';

const Menu = () => {
    const dispatch = useDispatch();
    const openDrawer = useSelector((state: stateInterface) => state.topbarReducer.openDrawer);
    const loadPage = (page: string) => {
        dispatch(push(`/${page}`));
        
        /* for drawer-menu */
        if(openDrawer){
            dispatch({type: OPEN_DRAWER}) 
        }
    }

    return (
        <nav className="navbar">
            <ul className="menu">
                <li onClick={() => loadPage("portfolio/1")}>多根自然款</li>
                <li onClick={() => loadPage("portfolio/2")}>自然開花款</li>
                <li onClick={() => loadPage("portfolio/3")}>臉部 Spa</li>
                <li onClick={() => loadPage("about")}>關於 Beinest</li>
            </ul>
        </nav>
    )
}

export default Menu;