import { Link } from "react-router-dom";
import "./_error.scss";

function Error() {
    return (
        <section className="error">
            <h2 className="error__title">404</h2>
            <h3 className="error__h3">
                Oups! La page que vous demandez n&apos;existe pas.
            </h3>
            <Link className="error__link" to="/">
                Retourner sur la page d&apos;accueil
            </Link>
        </section>
    );
}

export default Error;
