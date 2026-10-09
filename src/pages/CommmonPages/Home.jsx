import react from 'react';
import HeroSlider from '../../Components/HeroSlider';
import GlobeSection from '../../Components/GlobeSection';
import ResearchCards from '../../Components/ResearchCards';
import AboutSection from '../../Components/AboutSection.jsx';
function Home() {
  return (
    <>
    <HeroSlider />
    <GlobeSection />
    <ResearchCards />
    <AboutSection />
    </>
  );
}
export default Home;