// components/ui/Button.jsx
import PropTypes from "prop-types";

function Button({
  icon: Icon,
  text,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex justify-center items-center gap-2 
        bg-button text-button-text px-8 py-3 rounded-2xl 
        hover:bg-button/80 cursor-pointer
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="text-xl" aria-hidden="true" />}
      <span className="font-sans font-medium text-sm">{text}</span>
    </button>
  );
}

Button.prototype = {
  icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
