import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-broken-white selection:bg-soft-orange/20 selection:text-muted-orange">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Mission />
        <Services />
        <Testimonials />
        <Calculator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

