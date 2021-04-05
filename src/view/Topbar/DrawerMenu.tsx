import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { OPEN_DRAWER } from '../../redux/actionTypes';
import { stateInterface } from '../../interface/stateInterface';

import SocialLinkMenu from '../Components/SocialLinkMenu'

const DrawerMenu = () => {
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
        <div className='drawer-menu'>
            <nav className="navbar">
            <ul className="menu">
                <li onClick={() => loadPage("portfolio/nest-single")}>單根嫁接</li>
                <li onClick={() => loadPage("portfolio/nest-multiple")}>多根嫁接</li>
                <li onClick={() => loadPage("portfolio/acne")}>無痛粉刺</li>
                <li onClick={() => loadPage("portfolio/face-spa")}>臉部保養</li>
                <li onClick={() => loadPage("about")}>關於 BEI'S NEST</li>
                <li ><SocialLinkMenu/> </li>
            </ul>
        </nav>
        </div>
    )
}

export default DrawerMenu;