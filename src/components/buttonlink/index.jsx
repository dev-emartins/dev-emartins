import { Link } from "react-router-dom"

function ButtonLink({ icon: Icon, text: text, link: link }) {
    return (
        <Link to={ link } className="w-fit flex justify-between items-center gap-2 bg-(--foreground) text-(--background) px-8 py-3 rounded-full hover:bg-(--foreground)/80">
            <Icon className="text-xl" /> 
            <span className="font-sans font-medium text-sm">{ text }</span>
        </Link>
    )
}

export default ButtonLink