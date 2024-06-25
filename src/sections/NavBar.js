import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faBars, faXmark
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
  const isTablet = useMediaQuery(
    { query: '(min-width: 601px) and (max-width: 768px)' }
  );

  useEffect(() => {
    if (!isTablet) {
      setExpandNavSectionsButton(false);
    }
  }, [isTablet]);

  const handleExpandNavSections = () => {
    if (isTablet) {
      setExpandNavSectionsButton(!expandNavSectionsButton);
    }
  }

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
            style={{ backgroundColor: expandNavSectionsButton ? "unset": null }}
          >
            <FontAwesomeIcon
              icon={expandNavSectionsButton ? faXmark : faBars}
              className="icon"
            />
          </button>
        </div>
        {/*--------------------------------------------------------------------*/}

        <div className="nav-section nav-section-2">
          {/*Redirect to Projects section button*/}
          <button className="rect-btn project-btn"><p>PROJECTS</p></button>
          {/*Redirect to Experience section button*/}
          <button className="rect-btn experience-btn"><p>EXPERIENCE</p></button>
          {/*Redirect to Skills section button*/}
          <button className="rect-btn skills-btn"><p>SKILLS</p></button>
          {/*Redirect to Achievements section button*/}
          <button className="rect-btn achievements-btn"><p>ACHIEVEMENTS</p></button>
          {/*Redirect to Contact section button*/}
          <button className="rect-btn contact-btn"><p>CONTACT</p></button>
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
            {/*Redirect to Projects section button*/}
            <button className="rect-btn project-btn"><p>PROJECTS</p></button>
            {/*Redirect to Experience section button*/}
            <button className="rect-btn experience-btn"><p>EXPERIENCE</p></button>
            {/*Redirect to Skills section button*/}
            <button className="rect-btn skills-btn"><p>SKILLS</p></button>
            {/*Redirect to Achievements section button*/}
            <button className="rect-btn achievements-btn"><p>ACHIEVEMENTS</p></button>
            {/*Redirect to Contact section button*/}
            <button className="rect-btn contact-btn"><p>CONTACT</p></button>
          </div>
        )}
      </div>
    </nav>
  );
}
