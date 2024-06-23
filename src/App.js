import './styles/App.scss';
import { useMain } from './hooks';
import {
  HeroSection, Profile, NavBar
} from './sections';


export default function App() {
  const { showProfile } = useMain();

  return (
    <div className="app">
      <div className="nav-bar-container">
        <NavBar />
      </div>

      <main>
        <div className="hero-section-container">
          <HeroSection />
        </div>
      </main>

      {/*div with absolute position*/}
      {showProfile && (
        <div className="profile-container">
          <Profile />
        </div>
      )}
    </div>
  );
}
