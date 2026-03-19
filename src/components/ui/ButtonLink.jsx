import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ 
    icon: Icon, 
    text, 
    link = "#", 
    className = "" 
}) {
    return (
        <Link key={text} to={ link } className={`w-fit flex justify-between items-center gap-2 bg-button text-button-text px-8 py-3 rounded-full hover:bg-button/80 ${className}`}>
            {Icon && <Icon className="text-xl" /> }
            <span className="font-sans font-medium text-sm">{ text }</span>
        </Link>
    );
}

ButtonLink.prototype = {
  icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonLink;