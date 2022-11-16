import { useContext } from 'react';
import ScreenSizeContext from '../contexts/ScreenSizeContext';

function useScreenSize() {
  const { isMobile } = useContext(ScreenSizeContext);
  return { isMobile };
}
export default useScreenSize;
