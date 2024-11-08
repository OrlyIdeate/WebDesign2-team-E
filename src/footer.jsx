import twitter from './image/twitter-icon.png';
import facebook from'./image/facebook-icon.png';
import instagram from'image\instagram-icon.png';


export function Footer() {
    return(
        <footer>

            <div class="footer-container">
                <div class="footer-logo">
                    <img src="image/team.png" alt="Company Logo" />
                </div>
                <div class="footer-links">
                    <h3>team-E company</h3>
                    <p>📞0120-000-000</p>
                    <p>〒000-0000</p>
                    <p>福岡県福岡市博多区祇園町7-10</p>
                    <ul>
                        <li><a href="/about">会社概要</a></li>
                        <li><a href="/contact">採用情報</a></li>
                        <li><a href="/privacy">プライバシーポリシー</a></li>
                        <li><a href="/terms">利用規約</a></li>
                        <li><a href="/about">アクセス</a></li>
                        <li><a href="/about">お問い合わせ</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h3>フォローする</h3>
                    <ul>
                        <li><a href="https://twitter.com" target="_blank"><img src={twitter} alt="X"/></a></li>
                        <li><a href="https://facebook.com" target="_blank"><img src="facebook-icon.png" alt="Facebook"/></a></li>
                        <li><a href="https://instagram.com" target="_blank"><img src="facebook-icon.png" alt="instagram"/></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 team-E company. All rights reserved.</p>
            </div>
        </footer>
    );
}