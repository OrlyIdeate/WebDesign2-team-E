//廣澤壱聖
import React, { useState } from 'react';

export function Sidebar() {
  
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
                  <li><a href="#">スポーツ・アウトドア</a></li>
                  <li><a href="#">美容・健康</a></li>
                  <li><a href="#">キッズ・ベビー用品</a></li>
                  <li><a href="#">家具・インテリア</a></li>
                  <li><a href="#">ペット用品</a></li>
                  <li><a href="#">車・バイク用品</a></li>
                  <li><a href="#">本・メディア</a></li>
                  <li><a href="#">ガジェット・アクセサリー</a></li>
                  <li><a href="#">ギフト・季節用品</a></li>
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
    
    
    
}