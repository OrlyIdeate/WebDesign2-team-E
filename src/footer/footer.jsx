import './footer.css';

export function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="./images/teamE.png" alt="Company Logo" />
                    <div className="footer-contact">
                        <h2>team-E company</h2>
                        <p>📞0120-000-000</p>
                        <p>〒000-0000</p>
                        <p>福岡県福岡市博多区○○町7-10</p>
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/about">会社概要</a></li>
                        <li><a href="/contact">採用情報</a></li>
                        <li><a href="/privacy">プライバシーポリシー</a></li>
                        <li><a href="/terms">利用規約</a></li>
                        <li><a href="/about">アクセス</a></li>
                        <li><a href="/about">お問い合わせ</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>最新情報はこちらから↓↓</h3>
                    <ul>
                        <li><a href="https://twitter.com" target="_blank"><img  src="./images/twitter-icon.png" alt="X"/></a></li>
                        <li><a href="https://facebook.com" target="_blank"><img  src="./images/facebook-icon.png" alt="X"/></a></li>
                        <li><a href="https://instagram.com" target="_blank"><img  src="./images/instagram-icon.png" alt="X"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 team-E company. All rights reserved.</p>
            </div>
        </footer>
    );
}