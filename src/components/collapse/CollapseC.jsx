import "./_collapse.scss";
import { useState } from "react";
import Collapse from "react-collapse";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function CollapseC({ title, content }) {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className="collapse">
            <div className="collapse__close">
                <h3 className="collapse__close__title">{title}</h3>
                <FontAwesomeIcon
                    className={`collapse__close__icon ${
                        visible ? "rotate" : ""
                    }`}
                    icon={faChevronUp}
                    onClick={toggleVisibility}
                />
            </div>
            <div className={`collapse__open ${visible ? "openCollapse" : ""}`}>
                <Collapse isOpened={visible}>
                    <p className="collapse__open__paragraphe">{content}</p>
                </Collapse>
            </div>
        </div>
    );
}

CollapseC.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

export default CollapseC;
