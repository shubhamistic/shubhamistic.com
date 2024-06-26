import './styles/App.scss';
import { useMain } from './hooks';
import {
  SectionHeading
} from './components';
import {
  HeroSection, Profile, NavBar
} from './sections';


export default function App() {
  const { showProfile } = useMain();

  return (
    <div className="fixed app">
      <main>
        <div className="hero-section-container">
          <HeroSection />
        </div>

        {/*define projects section heading*/}
        <SectionHeading sectionName="PROJECTS"/>

        <div className="projects-section-container">

        </div>

        {/*define experience section heading*/}
        <SectionHeading sectionName="EXPERIENCE"/>

        <div className="experience-section-container">

        </div>

        {/*define skills section heading*/}
        <SectionHeading sectionName="SKILLS"/>

        <div className="skills-section-container">

        </div>

        {/*define achievements section heading*/}
        <SectionHeading sectionName="ACHIEVEMENTS"/>

        <div className="achievements-section-container">

        </div>

        {/*define contact section heading*/}
        <SectionHeading sectionName="CONTACT"/>

        <div className="contact-section-container">

        </div>
      </main>

      {/*div with fixed position*/}
      <div className="fixed nav-bar-container">
        <NavBar />
      </div>

      {showProfile && (
        <div className="fixed profile-container">
          <Profile />
        </div>
      )}
    </div>
  );
}
