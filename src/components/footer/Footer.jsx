import "./_footer.scss";
import logoKasa from "../../assets/images/kasa-white.svg";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__img" src={logoKasa} alt="Logo Kasa"></img>
            <p className="footer__paragraph">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    );
}
export default Footer;
