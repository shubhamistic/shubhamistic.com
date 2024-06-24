import { useEffect, useState } from 'react';
import '../styles/components/Carousel.scss';
import { useMain } from '../hooks';


export default function Carousel(props){
  // images: array of image links
  const { placeholderImage, images } = props;
  const { fetchedAlbumImages, handleFetchImage} = useMain();

  const [currentImageIndex, setCurrentImageIndex] = useState(-1);

  useEffect(() => {
    const changeImage = async () => {
      let newCurrentImageIndex = currentImageIndex + 1;
      if (newCurrentImageIndex === images.length) {
        newCurrentImageIndex = 0;
      }

      // handle request and add image to fetchedImages state
      await handleFetchImage(
        images[newCurrentImageIndex],
        newCurrentImageIndex,
        placeholderImage
      );

      setCurrentImageIndex(newCurrentImageIndex);
    };

    if (currentImageIndex === -1) {
      changeImage().then();
      return;
    }

    // Set timeout to call the function after 2 seconds
    const timeoutId = setTimeout(changeImage, 2000);

    // Cleanup the timeout
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex, handleFetchImage, images, placeholderImage]);

  return (
    <div className="carousel">
      <img
        src={
          (fetchedAlbumImages.length && currentImageIndex >= 0)
            ? fetchedAlbumImages[currentImageIndex]
            : placeholderImage
        }
        alt="loading album..."
      />
    </div>
  );
};