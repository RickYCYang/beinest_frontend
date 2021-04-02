import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Menu = () => {
    const dispatch = useDispatch();
    const loadPage = (page: string) => {
        dispatch(push(`/${page}`));
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