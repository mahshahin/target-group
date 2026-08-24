import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Smooth-scrolls to an in-page section by id.
 * Works around HashRouter, where raw "/#section" anchors are parsed as
 * routes ("products") that match nothing and blank out the page.
 * On non-home pages it first navigates home, then scrolls to the section.
 */
const useSectionNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (id) => {
      const scrollTo = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

      if (pathname !== '/') {
        navigate('/');
        setTimeout(scrollTo, 150);
      } else {
        scrollTo();
      }
    },
    [navigate, pathname]
  );
};

export default useSectionNav;
