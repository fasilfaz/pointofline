
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/services/ServicesSection.jsx';
import ImageGallery from './components/home/ImageGallery';
// import ProjectShowcase from './components/home/ProjectShowcase';
import ParallaxBanner from './components/home/ParallaxBanner.jsx';
import ClientsSection from './components/home/ClientsSection';
import Footer from './components/layout/Footer';
import ContactForm from './components/home/contactForm.jsx';
import AboutPage from './components/home/AboutPage.jsx';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ImageGallery />
      <ParallaxBanner />
      {/* <ProjectShowcase /> */}
      <ClientsSection />
      <ContactForm/>
      <AboutPage/>
      <Footer />
    </div>
  );
};

export default App;