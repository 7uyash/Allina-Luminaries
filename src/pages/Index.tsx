
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DeviceShowcase } from '@/components/DeviceShowcase';
import { Services } from '@/components/Services';
import { Metrics } from '@/components/Metrics';
import { Journey } from '@/components/Journey';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const deviceSection = document.getElementById('device-showcase');
      if (deviceSection) {
        const rect = deviceSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.6;
        setIsDarkMode(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen w-full relative transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-[#E7DED7]'}`}>
      <Header />
      
      <main>
        <Hero />
        <div id="device-showcase">
          <DeviceShowcase />
        </div>
        <Services />
        <Metrics />
        <Journey />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
