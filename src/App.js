import './styles/App.scss';
import { useMain } from './hooks';
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
