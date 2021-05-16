import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const TopbarMenu = () => {
    const dispatch = useDispatch();
    const loadPage = (page: string) => {
        dispatch(push(`/${page}`));
    }
    return (
        <div className='topbar-menu'>
            <nav className="navbar">
                <ul className="menu">
                    <li onClick={() => loadPage("")}>最新消息</li>
                    <li onClick={() => loadPage("portfolioCatg/nest")}>美婕嫁婕</li>
                    <li onClick={() => loadPage("portfolioCatg/acne")}>無痛粉刺課程</li>
                    <li onClick={() => loadPage("about")}>關於 BEI'S NEST</li>
                </ul>
            </nav>
        </div>
    )
}

export default TopbarMenu;