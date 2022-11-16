import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MEDIAQUERIES } from '../constants';
const ScreenSizeContext = createContext();

export function ScreenSizeProvider({ children }) {
  const isMobile = useMediaQuery({ query: MEDIAQUERIES.xs });
  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export default ScreenSizeContext;
