import { createContext } from 'react';
import { useProvideMain } from '../hooks';

export const MainContext = createContext({
  showProfile: false,
  handleToggleShowProfileButton: () => {},
  fetchedAlbumImages: [],
  handleFetchImage: () => {}
});

export const MainProvider = ({ children }) => {
  const main = useProvideMain();

  return (
    <MainContext.Provider
      value={main}
    >
      {children}
    </MainContext.Provider>
  )
}