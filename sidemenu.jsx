import React, { useState } from 'react';
import './Sidebar.css'; // スタイルは別ファイルに分けることをお勧めします

const Sidebar = () => {
  // メニュー項目の状態管理
  const [activeMenu, setActiveMenu] = useState(null);

  // メニュー項目をクリックしたときの動作
  const toggleMenu = (menu) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === menu ? null : menu));
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <a href="#" className="menu-item" onClick={() => toggleMenu('categories')}>
            商品カテゴリ
          </a>
          {activeMenu === 'categories' && (
            <ul className="submenu">
              <li><a href="#">ファッション</a></li>
              <li><a href="#">家電</a></li>
              <li><a href="#">食品</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className="menu-item" onClick={() => toggleMenu('services')}>
            サービス
          </a>
          {activeMenu === 'services' && (
            <ul className="submenu">
              <li><a href="#">配送サービス</a></li>
              <li><a href="#">ギフトカード</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className="menu-item" onClick={() => toggleMenu('account')}>
            マイアカウント
          </a>
          {activeMenu === 'account' && (
            <ul className="submenu">
              <li><a href="#">ログイン</a></li>
              <li><a href="#">新規登録</a></li>
              <li><a href="#">注文履歴</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
