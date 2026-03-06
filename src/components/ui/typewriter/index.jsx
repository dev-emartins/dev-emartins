import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Typewriter({ 
  texts = [], 
  typingSpeed = 300,
  erasingSpeed = 150,
  delayAfterTyping = 1500,
  prefix = "root@dem:/#",
  cursor = "|",
  loop = true
}) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      const element = typingRef.current;

      if (!element || !currentText) return;

      if (!isDeleting && charIndex < currentText.length) {
        element.innerHTML = currentText.substring(0, charIndex + 1);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        element.innerHTML = currentText.substring(0, charIndex - 1);
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayAfterTyping);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return loop ? nextIndex % texts.length : Math.min(nextIndex, texts.length - 1);
        });
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting, texts, typingSpeed, erasingSpeed, delayAfterTyping, loop]);

  if (!texts.length) return null;

  return (
    <p className="w-auto font-mono flex items-center text-base md:text-xl">
      <span className="font-black mr-1 text-foreground">{prefix}</span>
      <span className="font-medium" ref={typingRef}></span>
      <span className="font-black animate-blink">{cursor}</span>
    </p>
  );
}

Typewriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number,
  erasingSpeed: PropTypes.number,
  delayAfterTyping: PropTypes.number,
  prefix: PropTypes.string,
  cursor: PropTypes.string,
  loop: PropTypes.bool
};

export default Typewriter;