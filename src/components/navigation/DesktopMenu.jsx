import { NavLink } from "react-router-dom";
import { menuItems } from "./MenuItems";
import PropTypes from "prop-types";

function DesktopMenu({ className = '' }) {
  return (
    <div className={`hidden md:flex items-center gap-1 ${className}`}>
      {menuItems.map(item => (
        <NavLink
          key={ item.id }
          to={ item.to }
          className="py-2 px-4 rounded-full transition-colors font-medium text-base hover:bg-button/10 cursor-pointer"
        >
          { item.label }
        </NavLink>
      ))}
    </div>
  );
}

DesktopMenu.prototype = {
  className: PropTypes.string
};

export default DesktopMenu;