import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/sections/HeroSection.scss";


export default function HeroSection() {

  return (
    <div className="hero-section">
      <p className="intro-desc">
        Explore the world of stunning web projects developed by,
      </p>

      <div className="intro-name">
        <h1>SHUBHAMISTIC</h1>
        <h1>SHUBHAMISTIC</h1>
      </div>

      <button className="circle-btn">
        <FontAwesomeIcon icon={faChevronDown} className="icon"/>
      </button>
    </div>
  );
}
