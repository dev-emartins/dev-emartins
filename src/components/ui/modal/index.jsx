import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaCircleXmark } from "react-icons/fa6";

function Modal({ isOpen, onClose, title, children, size = "md" }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl"
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className={`
          relative bg-background rounded-xl shadow-xl w-full shadow-button/10
          ${sizes[size]} animate-fade-in
        `}
      >
        <div className="flex items-center justify-between p-6 border-b border-button/20">
          <h2 id="modal-title" className="text-xl font-semibold text-foreground">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-foreground transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <FaCircleXmark size={ 20 } />
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"])
};

export default Modal;