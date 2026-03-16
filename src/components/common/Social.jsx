import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Social({ 
    icon: Icon,
    id,
    label, 
    link,  
    className = ""   
}) {
    return (
        <Link id={ id } to={ link } aria-label={ label } target="_blank" className={`p-3 bg-button hover:bg-button/80 text-background rounded-full ${className}`}>
            <Icon className="text-xl" />
        </Link>        
    )
}

Social.prototype = {
    icon: PropTypes.elementType,
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Social;