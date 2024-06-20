import './styles/App.scss';
import { NavBar } from './components';
import {
  HeroSection
} from "./sections";

export default function App() {
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
    </div>
  );
}
