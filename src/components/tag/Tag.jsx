import "./_tag.scss";
import PropTypes from "prop-types";

function Tag({ title }) {
    return (
        <div className="tag" title={title}>
            {title}
        </div>
    );
}

Tag.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Tag;
