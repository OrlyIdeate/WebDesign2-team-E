// 土谷　祐斗

import React from 'react';
import './header.css';

export function Header() {
    return (
        <header>
            <div className="header-search-cart">
                <div className="header-search">
                    <input
                        type="text"
                        className="header-searchInput"
                        placeholder="商品を検索"
                    />
                    <button className="header-searchButton">検索</button>
                </div>

                <nav className="header-nav">
                    <ul className="header-navList">
                        <li className="header-navItem">
                            <a href="/cart" className="header-cartButton">カート</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
