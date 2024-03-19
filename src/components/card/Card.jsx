import "./_card.scss";
import { Link } from "react-router-dom";
import Data from "../../data/data.json";

function Card() {
    return (
        <div className="card-container">
            {Data.map((post) => {
                return (
                    <Link
                        className="card-container__card"
                        key={post.id}
                        to={`/fiche-logement/${post.id}`}
                    >
                        <h3 className="card-container__card__title">
                            {post.title}
                        </h3>
                    </Link>
                );
            })}
        </div>
    );
}

export default Card;
