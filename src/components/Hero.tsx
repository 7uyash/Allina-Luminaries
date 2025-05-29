
import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBoxClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center">
          <h1 className="font-anton text-4xl md:text-6xl lg:text-8xl font-normal leading-tight tracking-wider text-[#06153A] dark:text-white mb-8">
            <span className="block">Illuminating Progress</span>
            <span className="block">Empowering Growth.</span>
          </h1>
          
          {/* Decorative lines - top right */}
          <svg className="absolute top-0 right-0 w-16 h-12 md:w-24 md:h-16 lg:w-32 lg:h-20" viewBox="0 0 120 60" fill="none">
            <path d="M70 26.7168L98.39 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-[#06153A] dark:text-white"/>
            <path d="M82.47 34.9854L115.92 17.7314" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-[#06153A] dark:text-white"/>
            <path d="M86.47 45.9854L112 53" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-[#06153A] dark:text-white"/>
          </svg>
          
          {/* Decorative lines - bottom left */}
          <svg className="absolute bottom-20 left-0 w-16 h-12 md:w-24 md:h-16 lg:w-32 lg:h-20" viewBox="0 0 120 60" fill="none">
            <path d="M56 40.829L23.2336 67" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-[#06153A] dark:text-white"/>
            <path d="M41.6111 32.074L3 50.343" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-[#06153A] dark:text-white"/>
            <path d="M36.9948 20.427L7.52832 13" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-[#06153A] dark:text-white"/>
          </svg>
        </div>
        
        <p className="text-[#06153A] dark:text-white text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
          From smart streetlighting solutions to end-to-end EPC services,
          ALLINA is committed to delivering innovative, sustainable, and
          reliable infrastructure solutions. Together, we light the way to a
          brighter future.
        </p>
        
        <div className="flex justify-center">
          <div 
            onClick={handleBoxClick}
            className={`cursor-pointer transition-all duration-700 ease-in-out ${
              isExpanded 
                ? 'w-full max-w-4xl h-48 bg-[#06153A] rounded-[40px]' 
                : 'w-32 h-28 bg-[#06153A] rounded-[20px] hover:scale-105'
            }`}
          >
            {isExpanded && (
              <div className="flex items-center h-full p-8 animate-fade-in">
                <div className="flex items-center gap-8 w-full">
                  <div className="flex-shrink-0">
                    <svg width="80" height="80" viewBox="0 0 120 120" fill="none">
                      <path d="M60 10L70 40H100L78 58L88 88L60 70L32 88L42 58L20 40H50L60 10Z" fill="white" fillOpacity="0.8"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-normal leading-6 text-justify">
                      "Welcome to ALLINA, a trusted name in the streetlighting industry and a company with a vision to expand into multiple sectors. With a strong foundation in engineering, procurement, and construction (EPC) services, we specialize in delivering cutting-edge streetlighting solutions, including smart lighting technologies, GIS mapping, and IoT-enabled systems. Our commitment to quality, innovation, and sustainability drives us to create infrastructure that powers progress and enhances lives."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
