
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/services/ServicesSection.jsx';
import ImageGallery from './components/home/ImageGallery';
import ProjectShowcase from './components/home/ProjectShowcase';
import ParallaxBanner from './components/home/ParallaxBanner.jsx';
import ClientsSection from './components/home/ClientsSection';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ImageGallery />
      <ParallaxBanner />
      <ProjectShowcase />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default App;