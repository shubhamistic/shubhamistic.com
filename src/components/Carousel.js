import { useEffect, useState } from 'react';
import '../styles/components/Carousel.scss';


export default function Carousel(props){
  // images: array of image links
  const { images } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [currentImageSrc, setCurrentImageSrc] = useState('');

  useEffect(() => {
    setCurrentImageSrc(images[0]);
  }, [images])

  useEffect(() => {
    const changeImageSrc = () => {
      setCurrentImageSrc(images[currentImageIndex]);

      const newCurrentImageIndex = currentImageIndex + 1;
      if (newCurrentImageIndex === images.length) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(newCurrentImageIndex);
      }
    };

    // Set timeout to call the function after 2 seconds
    const timeoutId = setTimeout(changeImageSrc, 2000);

    // Cleanup the timeout
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex, images])

  return (
    <div className="carousel">
      <img
        src={currentImageSrc}
        alt={currentImageSrc}
      />
    </div>
  );
};