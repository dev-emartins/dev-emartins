import { Link } from "react-router-dom";

function ButtonLink({ icon: Icon, text: text, link: link }) {
    return (
        <Link to={ link } className="w-fit flex justify-between items-center gap-2 bg-button text-button-text px-8 py-3 rounded-full hover:bg-button/80">
            <Icon className="text-xl" /> 
            <span className="font-sans font-medium text-sm">{ text }</span>
        </Link>
    );
}

export default ButtonLink;