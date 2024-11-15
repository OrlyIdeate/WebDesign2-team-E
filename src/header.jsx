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
                <a href="/">AMAZON.CO.JP</a>
            </div>

            {/* 検索バー */}
            <div className="header-search">
                <input
                    type="text"
                    className="header-searchInput"
                    placeholder="商品を検索"
                />
                <button className="header-searchButton">🔍</button>
            </div>

            {/* カートボタン */}
            <a href="/cart" className="header-cartButton">
                カート
            </a>
        </header>
    );
}