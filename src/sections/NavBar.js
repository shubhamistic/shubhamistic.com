import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faArrowUpRightFromSquare, faBars, faXmark
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import "../styles/sections/NavBar.scss";
import { useMain } from '../hooks';


export default function NavBar() {
  const {
    showProfile,
    handleToggleShowProfileButton
  } = useMain();

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
          {/*Open my-profile button*/}
          <button
            className="square-btn my-profile-btn"
            onClick={handleToggleShowProfileButton}
            style={{ backgroundColor: showProfile ? "unset": null }}
          >
            {showProfile ? (
              <FontAwesomeIcon icon={faXmark} className="icon"/>
            ) : (
              <img
                src='https://raw.githubusercontent.com/shubhamistic/shubhamistic/main/assets/shubhamistic-icon-256x256.ico'
                alt='my-profile'
              />
            )}
          </button>
        </div>
      </div>

      <div className='nav-bar-bottom'>
        {expandNavSectionsButton && (
          <div className='nav-section-expanded'>

          </div>
        )}
      </div>
    </nav>
  );
}
