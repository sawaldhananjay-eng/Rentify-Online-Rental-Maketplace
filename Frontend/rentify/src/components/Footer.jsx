import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaHeart
} from "react-icons/fa";

import "../css/Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    <div>

                        <h2 className="footer-logo">

                            Rentify

                        </h2>

                        <p className="footer-text">

                            India's modern rental marketplace where people
                            can rent electronics, furniture, bikes and much more.

                        </p>

                    </div>

                    <div>

                        <h5 className="footer-title">

                            Quick Links

                        </h5>

                        <div className="footer-links">

                            <a href="/">Home</a>

                            <a href="/about">About</a>

                            <a href="/browse">Browse</a>

                        </div>

                    </div>

                    <div>

                        <h5 className="footer-title">

                            Follow Us

                        </h5>

                        <div className="footer-social">

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <span>

                        © 2025 <strong>Rentify</strong>. All Rights Reserved.

                    </span>

                    <span>

                        Made with <FaHeart className="heart" /> in India

                    </span>

                </div>

            </div>

        </footer>

    );

}

export default Footer;