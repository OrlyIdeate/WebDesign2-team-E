//廣澤壱聖
import React, { useState } from 'react';
import './sidebar.css';
export function Sidebar() {
  return (
    <div className="sidebar">
      <h2>メニュー</h2>
      <ul className="menu">
        <li>
          <a href="#" className="menu-item">
            商品カテゴリ
          </a>
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
        </li>
        <li>
          <a href="#" className="menu-item">
            サービス
          </a>
          <ul className="submenu">
            <li><a href="#">配送サービス</a></li>
            <li><a href="#">ギフトカード</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="menu-item">
            マイアカウント
          </a>
          <ul className="submenu">
            <li><a href="#">ログイン</a></li>
            <li><a href="#">新規登録</a></li>
            <li><a href="#">注文履歴</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}