export function Footer() {
    return(
        <footer>

            <div class="footer-container">
                <div class="footer-logo">
                    <img src="logo.png" alt="Company Logo" />
                </div>
                <div class="footer-links">
                    <h3>リンク</h3>
                    <ul>
                        <li><a href="/about">会社概要</a></li>
                        <li><a href="/contact">お問い合わせ</a></li>
                        <li><a href="/privacy">プライバシーポリシー</a></li>
                        <li><a href="/terms">利用規約</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h3>フォローする</h3>
                    <ul>
                        <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 会社名. All rights reserved.</p>
            </div>
        </footer>
    );
}