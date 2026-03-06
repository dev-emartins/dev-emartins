import { useState } from "react";
import PropTypes from "prop-types";

function Input({
  name,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  error = "",
  className = "",
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.toString().length > 0;

  return (
    <div className="w-full">
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`
            w-full bg-transparent border-2 rounded-xl p-3 pt-4
            font-sans text-base text-foreground
            transition-all duration-200
            focus:outline-none
            ${error 
              ? "border-pulse focus:border-pulse/80" 
              : "border-foreground"
            }
            ${className}
          `}
          placeholder=" "
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          {...rest}
        />
        
        <label 
          htmlFor={name}
          className={`
            absolute left-4 transition-all duration-200 pointer-events-none
            ${(hasValue || isFocused) 
              ? "text-xs top-1 text-foreground" 
              : "text-base top-4"
            }
            ${error ? "text-pulse" : ""}
          `}
        >
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      </div>
      
      {error && (
        <p 
          id={`${name}-error`} 
          className="mt-1 text-sm text-pulse"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

Input.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string
};

export default Input;