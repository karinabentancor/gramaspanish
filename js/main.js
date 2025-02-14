document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
        <nav class="navbar">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="learn.html">LEARN</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="contact.html">CONTACT</a></li>
            </ul>
        </nav>
    `;
    document.getElementById('navbar').innerHTML = navbar;

    const footer = `
        <div class="footer-container">
            <div class="social-icons">
                <a href="#"><img src="media/svg/envelope.svg" alt="Email"></a>
                <a href="#"><img src="media/svg/instagram.svg" alt="Instagram"></a>
                <a href="#"><img src="media/svg/telegram.svg" alt="Telegram"></a>
            </div>

            <div class="logo-footer">
                <div class="logo-footer">GЯAMA SPANISH</div>
            </div>

            <div class="subscribe">
                <input type="email" placeholder="Enter your email to stay updated">
                <button>JOIN US</button>
            </div>
        </div>
    `;
    document.getElementById('footer').innerHTML = footer;
});
