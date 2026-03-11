import { useState } from "react";
import PropTypes from "prop-types";
import Placeholder from "./Placeholder";

function Image({ 
  src, 
  alt, 
  className = "",
  classNameFigure = "",
  width, 
  height,
  lazy = true,
  fallbackSrc = <Placeholder />,
  objectFit = "cover",
  onClick,
  ...rest 
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className={`flex justify-center items-center image-container ${isLoading ? 'loading' : ''} ${hasError ? 'error' : ''}`}
      style={{ 
        position: 'relative',
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
      }}
    >
      {/* Skeleton/Loading indicator */}
      {isLoading && (
        <div className="image-skeleton absolute inset-0 bg-background animate-pulse rounded" />
      )}
      <figure className={classNameFigure}>
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} text-foreground ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          width={width}
          height={height}
          loading={lazy ? "lazy" : "eager"}
          onError={handleError}
          onLoad={handleLoad}
          onClick={onClick}
          style={{
            objectFit: objectFit,
            transition: 'opacity 0.3s ease-in-out',
            width: '100%',
            height: '100%',
          }}
          {...rest}
        />
      </figure>      
    </div>
  );
}

Image.prototype = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lazy: PropTypes.bool,
  fallbackSrc: PropTypes.string,
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  onClick: PropTypes.func,
};

export default Image;