import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import PropTypes from "prop-types";

function MenuToggle({ isOpen, onClick, className = '' }) {
  return (
    <button
      className={`
        md:hidden text-2xl rounded-full transition-colors 
        hover:bg-button/10 cursor-pointer ${className}
      `}
      onClick={ onClick }
      aria-label={ isOpen ? 'Fechar menu' : 'Abrir menu' }
    >
      { isOpen ? <FaBars /> : <FaBarsStaggered /> }
    </button>
  );
}

MenuToggle.prototype = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default MenuToggle;