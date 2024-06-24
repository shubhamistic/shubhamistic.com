import { useContext, useState } from 'react';
import { MainContext } from '../providers';
import { fetchImage as requestFetchImage } from '../api';


export const useMain = () => {
  return useContext(MainContext);
}

export const useProvideMain = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [fetchedAlbumImages, setFetchedAlbumImages] = useState([]);

  const handleToggleShowProfileButton = () => {
    setShowProfile(!showProfile);
  }

  const handleFetchImage = async (ImageUrl, index, placeholderImage) => {
    if (!fetchedAlbumImages[index]) {
      const imageBlob = await requestFetchImage(ImageUrl);
      // add fetched image to the fetchedAlbumImages state
      let newFetchedImages = [...fetchedAlbumImages];
      if (imageBlob) {
        newFetchedImages[index] = URL.createObjectURL(imageBlob);
      } else {
        newFetchedImages[index] = placeholderImage;
      }
      setFetchedAlbumImages(newFetchedImages);
    }
  }

  return {
    showProfile,
    handleToggleShowProfileButton,
    fetchedAlbumImages,
    handleFetchImage
  }
};