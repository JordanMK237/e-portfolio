import {Mail,Linkedin,Instagram,Github} from "lucide-react";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner container">
                <p>© {new Date().getFullYear()} Jordan MVOTIO</p>
                <nav className="footer-nav">
                    <a href="https://www.instagram.com/lezer.cm/" target="_blank" rel="noreferrer"
                       aria-label="Instagram">
                        <Instagram className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-mvotio-bb008b26b/" target="_blank" rel="noreferrer"
                       aria-label="LinkedIn">
                        <Linkedin className="icon"/>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"
                       rel="noreferrer" aria-label="Mail">
                        <Mail className="icon"/>
                    </a>
                    <a href="https://github.com/JordanMK237" target="_blank"
                       rel="noreferrer" aria-label="Mail">
                        <Github className="icon"/>
                    </a>
                </nav>
                <nav className="footer-nav">
                    <p>Hard work & love</p>
                </nav>
            </div>
        </footer>
    );
}
