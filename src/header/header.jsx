import React, { useState } from 'react';
import './header.css';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // メニューの開閉状態

    return (
        <header className="header">
            {/* 左から順に要素を配置 */}
            {/* ハンバーガーメニュー */}
            <button
                className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* ロゴ */}
            <div className="header-logo">
                <a href="/">AMOZON.CO.JP</a>
            </div>

            {/* 検索バー */}
            <div className="header-search">
                <input
                    type="text"
                    className="header-searchInput"
                    placeholder="商品を検索"
                />
                <button className="header-searchButton">
                    <img style={{ width: '15px', height: '15px', objectFit: 'contain'}} src="./images/search_icon.png" alt="虫眼鏡" />
                </button>
            </div>

            {/* カートボタン */}
            <a href="/cart" className="header-cartButton">
                カート
            </a>
            
        </header>
    );
}