import { Link } from "react-router-dom";

function Social({ label: label, link: link, icon: Icon }) {
    return (
        <Link to={ link } aria-label={ label } target="_blank" className="p-3 bg-button hover:bg-button/80 text-background rounded-full">
            <Icon className="text-xl" />
        </Link>        
    )
}

export default Social;