import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Handle initial page load and reloads
    window.scrollTo(0, 0);
  }, []); // Empty dependency array for initial load

  useEffect(() => {
    // Handle route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 