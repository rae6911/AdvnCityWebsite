import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoAreWe from './components/WhoAreWe';
import Benefits from './components/Benefits';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Quote from './components/Quote';
import WorkProcess from './components/WorkProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => (
  <main>
    <Hero />
    <WhoAreWe />
    <Benefits />
    <Quote />
    <WorkProcess />
    <Contact />
  </main>
);

const ServicesPage = () => (
  <main className="pt-10">
    <Services />
  </main>
);

function App() {
  return (
    <div className="min-h-screen font-sans bg-bg-light text-text-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
