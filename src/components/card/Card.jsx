import "./_card.scss";
import { Link } from "react-router-dom";
// import Data from "../../data/data.json";
import PropTypes from "prop-types";

function Card({ data }) {
    return (
        <div className="card-container">
            {data.map((post) => {
                return (
                    <Link
                        className="card-container__card"
                        key={post.id}
                        to={`/fiche-logement/${post.id}`}
                    >
                        <img
                            className="card-container__card__cover"
                            src={post.cover}
                            alt={post.title}
                        ></img>
                        <h3 className="card-container__card__title">
                            {post.title}
                        </h3>
                    </Link>
                );
            })}
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Card;
