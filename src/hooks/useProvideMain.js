import { useContext, useState } from 'react';
import { MainContext } from '../providers';


export const useMain = () => {
  return useContext(MainContext);
}

export const useProvideMain = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleToggleShowProfileButton = () => {
    setShowProfile(!showProfile);
  }

  return {
    showProfile,
    handleToggleShowProfileButton
  }
};