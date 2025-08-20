import { Link } from "react-router-dom"

function Social({ icon: Icon, link: link }) {
    return (
        <Link to={ link } target="_blank" className="p-3 bg-(--foreground) hover:bg-(--foreground)/80 text-(--background) rounded-full">
            <Icon className="text-xl" />
        </Link>        
    )
}

export default Social