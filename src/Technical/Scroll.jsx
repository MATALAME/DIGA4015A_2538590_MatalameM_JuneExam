import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   //Whenever I pressed the category button, it would always load at the middle of the page, which was causing issues
  }, [pathname]);            //cause I want the user to see the top content so I needed to add this script that ensures that the pages load at the top (0,0)

  return null;
};

export default Scroll;
