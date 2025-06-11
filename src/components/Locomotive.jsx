import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";

const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const location = useLocation(); // Auto-detects page route changes

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    setTimeout(() => {
      scroll.update();
    }, 500);

    return () => {
      scroll.destroy();
    };
  }, [location.pathname]); 

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
};

export default ScrollProvider;
