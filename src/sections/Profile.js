import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "../styles/sections/Profile.scss"
import { Carousel } from "../components"
import albumPlaceholderImage from "../assets/album-placeholder.png";

export default function Profile() {
  const album_links = [
    "https://raw.githubusercontent.com/shubhamistic/shubhamistic/main/assets/album/1.png",
    "https://raw.githubusercontent.com/shubhamistic/shubhamistic/main/assets/album/2.png",
    "https://raw.githubusercontent.com/shubhamistic/shubhamistic/main/assets/album/3.png",
    "https://raw.githubusercontent.com/shubhamistic/shubhamistic/main/assets/album/4.png",
    "https://raw.githubusercontent.com/shubhamistic/shubhamistic/main/assets/album/5.png"
  ]

  const openGithub = () => {
    // Function to open GitHub in the new tab
    window.open('https://github.com/shubhamistic', '_blank');
  };
  const openLinkedIn = () => {
    // Function to open LinkedIn in the new tab
    window.open('https://www.linkedin.com/in/shubhamistic/', '_blank');
  };
  const openMail = () => {
    // Function to open E-Mail
    window.location.href = 'mailto:shubham2003garg@gmail.com';
  };

  return (
    <div className="profile">
      <div className="profile-links">
        {/*Open GitHub in the new tab button*/}
        <button className="square-btn" onClick={openGithub}>
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </button>
        {/*Open LinkedIn in the new tab button*/}
        <button className="square-btn" onClick={openLinkedIn}>
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </button>
        {/*Open E-Mail button*/}
        <button className="square-btn" onClick={openMail}>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </button>
      </div>

      <div className="line"></div>

      <div className="profile-carousel">
        <Carousel
          placeholderImage={albumPlaceholderImage}
          images={album_links}
        />
      </div>

      <div className="line"></div>

      <p className="about-text">
        <b>Hi</b>, my name is Shubham Garg. 👋 I'm a B.Tech Computer Science student at
        Manipal University Jaipur with nearly 4 years of coding experience. 💻
        An enthusiast in development with strong logic building, I hold multiple
        certifications and aim to be a full-stack web developer creating
        impactful solutions. 🚀
      </p>
    </div>
  );
}
