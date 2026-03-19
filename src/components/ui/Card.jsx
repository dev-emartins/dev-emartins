import PropTypes from "prop-types";

function Card({ 
    title, 
    description, 
    icon: Icon, 
    i,
    className = "",
}) {
    return (
        <div 
            key={i}
            className={`text-center border border-button/40 rounded-2xl p-6 sm:p-8 bg-background/40 backdrop-blur-sm group ${className}`}
            >
            <div className="flex justify-center items-center pb-4 transform group-hover:scale-120 transition-transform duration-300">
                <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-button" />
            </div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-sm sm:text-base text-foreground">
                {description}
            </p>
        </div>
    );
}

Card.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    i: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default Card;