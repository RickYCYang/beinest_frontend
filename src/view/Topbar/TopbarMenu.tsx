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
                    <li onClick={() => loadPage("portfolio/nest-single")}>單根嫁接</li>
                    <li onClick={() => loadPage("portfolio/nest-multiple")}>多根嫁接</li>
                    <li onClick={() => loadPage("portfolio/acne")}>無痛粉刺</li>
                    <li onClick={() => loadPage("portfolio/face-spa")}>臉部保養</li>
                    <li onClick={() => loadPage("about")}>關於 BEI'S NEST</li>
                </ul>
            </nav>
        </div>
    )
}

export default TopbarMenu;