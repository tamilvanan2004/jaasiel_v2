import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FoodBrandDetailPage from './pages/FoodBrandDetailPage';
import CertificationDetailPage from './pages/CertificationDetailPage';
import Home from './pages/Home';
import About from './pages/About';
import Industries from './pages/Industries';
import Clients from './pages/Clients';
import Process from './pages/Process';
import Events from './pages/Events';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import WhoWeAre from './pages/WhoWeAre';
import ManagementTeam from './pages/ManagementTeam';
import ServiceAreas from './pages/ServiceAreas';
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }
    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Navbar />

      <Box component="main" sx={{ pt: '88px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/management-team" element={<ManagementTeam/>} />
          <Route path="/about/service-areas" element={<ServiceAreas />} />
          <Route path="/services" element={<ServiceDetailPage />} />

          {/* "Food Service" dropdown destinations */}
          <Route
            path="/services/sectors-served"
            element={<ServiceDetailPage initialSlug="manufacturing" />}
          />
          <Route
            path="/services/manufacturing"
            element={<ServiceDetailPage initialSlug="manufacturing" />}
          />
          <Route
            path="/services/healthcare"
            element={<ServiceDetailPage initialSlug="healthcare" />}
          />
          <Route
            path="/services/education"
            element={<ServiceDetailPage initialSlug="education" />}
          />
          <Route
            path="/services/corporates-and-services"
            element={<ServiceDetailPage initialSlug="corporates-and-services" />}
          />

          {/* Food Brands */}
          <Route
            path="/services/food-brands"
            element={<FoodBrandDetailPage initialSlug="desir" />}
          />
          <Route
            path="/services/food-brands/desir"
            element={<FoodBrandDetailPage initialSlug="desir" />}
          />
          <Route
            path="/services/food-brands/grandmas-recipe"
            element={<FoodBrandDetailPage initialSlug="grandmas-recipe" />}
          />
          <Route
            path="/services/food-brands/the-beijing"
            element={<FoodBrandDetailPage initialSlug="the-beijing" />}
          />
          <Route
            path="/services/food-brands/fruiteria"
            element={<FoodBrandDetailPage initialSlug="fruiteria" />}
          />

          {/* Certifications */}
          <Route
            path="/services/certifications"
            element={<CertificationDetailPage initialSlug="iso-22000-2018" />}
          />
          <Route
            path="/services/certifications/iso-22000-2018"
            element={<CertificationDetailPage initialSlug="iso-22000-2018" />}
          />
          <Route
            path="/services/certifications/iso-14001-2015"
            element={<CertificationDetailPage initialSlug="iso-14001-2015" />}
          />
          <Route
            path="/services/certifications/iso-45001-2018"
            element={<CertificationDetailPage initialSlug="iso-45001-2018" />}
          />

          <Route path="/industries" element={<Industries />} />
          <Route path="/process" element={<Process />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}