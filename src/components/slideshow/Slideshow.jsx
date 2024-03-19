import "./_slideshow.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Data from "../../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Slideshow() {
    const { id } = useParams();
    const post = Data.find((item) => item.id === id);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const nextIndex =
            currentSlide === post.pictures.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex =
            currentSlide === 0 ? post.pictures.length - 1 : currentSlide - 1;
        setCurrentSlide(prevIndex);
    };

    // Display the current page in the slideshow
    const currentPage = currentSlide + 1;
    const totalPages = post.pictures.length;

    useEffect(() => {
        const infos = document.querySelectorAll(".slideshow__icon");
        if (post.pictures.length < 2) {
            infos.forEach((info) => {
                info.style.display = "none";
            });
        } else {
            infos.forEach((info) => {
                info.style.display = "block";
            });
        }
    }, [post.pictures.length]);

    return (
        <div className="slideshow">
            <img
                className="slideshow__img"
                src={post.pictures[currentSlide]}
                alt={"Titre de l'image : " + post.title}
            />
            <FontAwesomeIcon
                className="slideshow__icon slideshow__icon--left"
                icon={faChevronLeft}
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                className="slideshow__icon slideshow__icon--right"
                icon={faChevronRight}
                onClick={nextSlide}
            />
            <p className="slideshow__icon slideshow__icon--nbPage">
                {currentPage}/{totalPages}
            </p>
        </div>
    );
}

export default Slideshow;
