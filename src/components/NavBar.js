import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faEnvelope, faArrowUpRightFromSquare, faBars
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useMediaQuery } from 'react-responsive';
import "../styles/components/NavBar.scss"


export default function NavBar() {
  const [expandNavSectionsButton, setExpandNavSectionsButton] = useState(false);

  // media queries
  const isTabletAndSmallScreen = useMediaQuery(
    { query: '(min-width: 601px) and (max-width: 1024px)' }
  );

  useEffect(() => {
    if (!isTabletAndSmallScreen) {
      setExpandNavSectionsButton(false);
    }
  }, [isTabletAndSmallScreen]);

  const handleExpandNavSections = () => {
    if (isTabletAndSmallScreen) {
      setExpandNavSectionsButton(!expandNavSectionsButton);
    }
  }

  const openResume = () => {
    // Function to open Resume in the new tab
    window.open('https://shubhamistic.github.io/resume/', '_blank');
  };
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
    <nav className="nav-bar">
      <div className="nav-bar-top">
        <div className="nav-section nav-section-1">
          {/*Smart Reload website button*/}
          <button className="square-btn">
            <FontAwesomeIcon icon={faHouse} className="icon"/>
          </button>
        </div>

        {/*--For Small Screens-------------------------------------------------*/}
        <div className="nav-section nav-section-ss-1">
          {/*Expand nav-bar button*/}
          <button
            className="square-btn"
            onClick={handleExpandNavSections}
          >
            <FontAwesomeIcon icon={faBars} className="icon"/>
          </button>
        </div>
        {/*--------------------------------------------------------------------*/}

        <div className="nav-section nav-section-2">
          {/*Redirect to Projects section button*/}
          <button className="rect-btn"><p>PROJECTS</p></button>
          {/*Redirect to Experience section button*/}
          <button className="rect-btn"><p>EXPERIENCE</p></button>
          {/*Redirect to Skills section button*/}
          <button className="rect-btn"><p>SKILLS</p></button>
          {/*Redirect to Achievements section button*/}
          <button className="rect-btn"><p>ACHIEVEMENTS</p></button>
          {/*Redirect to Contact section button*/}
          <button className="rect-btn"><p>CONTACT</p></button>
          {/*Redirect to Resume page in the new tab button*/}
          <button className="rect-btn text-and-icon-btn resume-btn" onClick={openResume}>
            <p>RESUME</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/>
          </button>
        </div>

        <div className="nav-section nav-section-3">
          <button className="square-btn my-profile-btn" onClick={() => {}}>
            <img
              src="https://raw.githubusercontent.com/shubhamistic/shubhamistic/main/assets/shubhamistic-icon-256x256.ico"
              alt="my-profile"
            />
          </button>
        </div>

        {/*/!*Open GitHub in the new tab button*!/*/}
        {/*<button className="square-btn" onClick={openGithub}>*/}
        {/*  <FontAwesomeIcon icon={faGithub} className="icon"/>*/}
        {/*</button>*/}
        {/*/!*Open LinkedIn in the new tab button*!/*/}
        {/*<button className="square-btn" onClick={openLinkedIn}>*/}
        {/*  <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>*/}
        {/*</button>*/}
        {/*/!*Open E-Mail button*!/*/}
        {/*<button className="square-btn" onClick={openMail}>*/}
        {/*  <FontAwesomeIcon icon={faEnvelope} className="icon"/>*/}
        {/*</button>*/}
        {/*Open my-profile button*/}
      </div>

      <div className="nav-bar-bottom">
        {expandNavSectionsButton && (
          <div className='nav-section-expanded'>

          </div>
        )}
      </div>
    </nav>
  );
}
