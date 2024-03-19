import PropTypes from "prop-types";
import "./_banner.scss";

function Banner({ src, title }) {
    return (
        <section className="banner">
            <div className="banner__mask"></div>
            <img className="banner__img" src={src} alt="banner"></img>
            <h2 className="banner__title2" title={title}>
                {title}
            </h2>
        </section>
    );
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default Banner;
