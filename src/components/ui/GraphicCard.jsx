import PropTypes from "prop-types";

function GraphicCard({ 
    icon: Icon,     
    title, 
    items,
    className = ""
}) {
    return (
        <div 
        key={title}
        className={`bg-background/20 backdrop-blur-lg border border-button/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group ${className}`}
        >
        <div className="flex items-center gap-3 mb-5">
            <Icon className="text-3xl text-button" />
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <div className="space-y-4">
            {items.map((item) => (
            <div key={item.name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-foreground">{item.level}%</span>
                </div>
                <div className="h-1.5 bg-button/50 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-button rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left"
                    style={{ width: `${item.level}%` }}
                />
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

GraphicCard.prototype = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            level: PropTypes.number
        })
    ).isRequired,
    className: PropTypes.string,
};

export default GraphicCard;