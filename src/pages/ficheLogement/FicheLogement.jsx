import { useParams } from "react-router-dom";
import Tag from "../../components/tag/Tag";
import CollapseC from "../../components/collapse/CollapseC";
import Data from "../../data/data.json";
import "./_ficheLogement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Error from "../error/Error";
import Slideshow from "../../components/slideshow/Slideshow";

function FicheLogement() {
    const { id } = useParams();
    const post = Data.find((item) => item.id === id);

    if (!post) {
        return <Error />;
    }
    // Convert the rating to an integer
    const rating = parseInt(post.rating);

    return (
        <section className="logement">
            <Slideshow />
            <div className="logement__container">
                <div className="logement__container__text">
                    <h2 className="logement__container__text__title">
                        {post.title}
                    </h2>
                    <p className="logement__container__text__location">
                        {post.location}
                    </p>
                </div>

                <div className="logement__container__tag">
                    {post.tags.map((tag, index) => (
                        <Tag key={index} title={tag} />
                    ))}
                </div>
                <div className="logement__container__host">
                    <div className="logement__container__host__info">
                        <p className="logement__container__host__info__name">
                            {post.host.name}
                        </p>
                        <img
                            className="logement__container__host__info__picture"
                            src={post.host.picture}
                        ></img>
                    </div>
                    <div className="logement__container__host__icons">
                        {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                className={index < rating ? "rated" : ""}
                            />
                        ))}
                    </div>
                </div>
                <div className="logement__container__container2">
                    <div className="logement__container__container2__collapse">
                        <CollapseC
                            title="Description"
                            content={post.description}
                        />
                    </div>
                    <div className="logement__container__container2__collapse">
                        <CollapseC
                            title="Equipement"
                            content={post.equipments.map((equipment, index) => (
                                <li
                                    className="logement__container__container2__collapse__li"
                                    key={index}
                                >
                                    {equipment}
                                </li>
                            ))}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FicheLogement;
