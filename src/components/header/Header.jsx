// Header.jsx
import { Link, useLocation } from "react-router-dom";
import "./_header.scss";
import logoKasa from "../../assets/images/kasa-red.svg";
import { useEffect } from "react";

function Header() {
    const location = useLocation();

    // Function to add the "current-page" class to the active link
    const addSelectedClass = () => {
        const selectedLink = document.querySelector(
            ".header__nav__link.selected"
        );
        if (selectedLink) {
            selectedLink.classList.add("current-page");
        }
    };

    // Call the function when the component is first loaded
    useEffect(() => {
        addSelectedClass();
    }, []);

    return (
        <header className="header">
            <img className="header__img" src={logoKasa} alt="Logo Kasa"></img>
            <nav className="header__nav">
                <Link
                    className={`header__nav__link ${
                        location.pathname === "/" && "selected"
                    }`}
                    to="/kasa-app"
                >
                    Accueil
                </Link>
                <Link
                    className={`header__nav__link ${
                        location.pathname === "/a-propos" && "selected"
                    }`}
                    to="/a-propos"
                >
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
