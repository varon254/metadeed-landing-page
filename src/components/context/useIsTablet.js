import { useState, useEffect } from "react";

const useIsTablet = (min = 768, max = 1024) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= min && width <= max);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [min, max]);

  return isTablet;
};

export default useIsTablet;
