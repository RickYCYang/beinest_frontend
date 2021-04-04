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
                <li onClick={() => loadPage("portfolio/nest-single")}>單根嫁接</li>
                <li onClick={() => loadPage("portfolio/nest-multiple")}>多根嫁接</li>
                <li onClick={() => loadPage("portfolio/acne")}>無痛粉刺</li>
                <li onClick={() => loadPage("portfolio/face-spa")}>臉部保養</li>
                <li onClick={() => loadPage("about")}>關於 BEI'S NEST</li>
            </ul>
        </nav>
    )
}

export default Menu;