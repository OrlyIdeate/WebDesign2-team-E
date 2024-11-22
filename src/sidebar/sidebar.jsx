//廣澤壱聖
import React, { useState } from 'react';
import './sidebar.css';

export function Sidebar() {
  // 各メニューの開閉状態を管理するための状態
  const [openCategory, setOpenCategory] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  // サブメニューの開閉をトグルする関数
  const toggleCategory = () => setOpenCategory(!openCategory);
  const toggleService = () => setOpenService(!openService);
  const toggleAccount = () => setOpenAccount(!openAccount);

  return (
    <div className="sidebar">
      <h2>メニュー</h2>
      <ul className="menu">
        <li>
          <a href="#" className="menu-item" onClick={toggleCategory}>
            商品カテゴリ
          </a>
          {/* 商品カテゴリのサブメニュー */}
          <ul className={`submenu ${openCategory ? 'open' : ''}`}>
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
        </li>
        <li>
          <a href="#" className="menu-item" onClick={toggleService}>
            サービス
          </a>
          {/* サービスのサブメニュー */}
          <ul className={`submenu ${openService ? 'open' : ''}`}>
            <li><a href="#">配送サービス</a></li>
            <li><a href="#">ギフトカード</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="menu-item" onClick={toggleAccount}>
            マイアカウント
          </a>
          {/* マイアカウントのサブメニュー */}
          <ul className={`submenu ${openAccount ? 'open' : ''}`}>
            <li><a href="#">ログイン</a></li>
            <li><a href="#">新規登録</a></li>
            <li><a href="#">注文履歴</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
