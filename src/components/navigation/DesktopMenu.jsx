import { NavLink } from "react-router-dom";
import { menuItems } from "./MenuItems";
import PropTypes from "prop-types";

function DesktopMenu({ className = '' }) {
  return (
    <div className={`hidden md:flex items-center ${className}`}>
      {menuItems.map(item => (
        <NavLink
          key={item.name}
          to={item.path}
          className="py-2 px-4 rounded-xl transition-colors text-base hover:bg-button/10 cursor-pointer"
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

DesktopMenu.prototype = {
  className: PropTypes.string
};

export default DesktopMenu;