
import React, { useState, useEffect } from 'react';

interface MetricData {
  title: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
}

export const Metrics: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const metricsData: MetricData[] = [
    {
      title: "PERFORMANCE METRICS",
      metrics: [
        { value: "98%", label: "Customer Efficiency" },
        { value: "20K+", label: "Projects Completed" },
        { value: "120+", label: "Team Members" },
        { value: "500M", label: "Investment Value" }
      ]
    },
    {
      title: "GROWTH METRICS", 
      metrics: [
        { value: "15+", label: "Years Experience" },
        { value: "95%", label: "Client Retention" },
        { value: "300+", label: "Cities Covered" },
        { value: "50M", label: "LED Lights Installed" }
      ]
    },
    {
      title: "INNOVATION METRICS",
      metrics: [
        { value: "25+", label: "Smart Solutions" },
        { value: "99.9%", label: "System Uptime" },
        { value: "85%", label: "Energy Savings" },
        { value: "200+", label: "Patents Filed" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const metricsSection = document.getElementById('metrics-section');
      if (metricsSection) {
        const rect = metricsSection.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight)));
          const newSection = Math.floor(scrollProgress * 3);
          setCurrentSection(Math.min(2, newSection));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="metrics-section" className="w-full py-20 px-4 md:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-[#06153A] dark:text-white text-center text-xl md:text-2xl font-normal tracking-[4px] mb-16">
          OUR METRICS
        </h2>
        
        <div className="bg-black rounded-[32px] p-8 md:p-16 relative overflow-hidden">
          {/* Left sidebar */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="flex flex-col gap-8">
              <div className="w-0.5 h-32 bg-white rounded"></div>
              <div className="w-0.5 h-8 bg-[#DDB9A2] rounded"></div>
              <div className="ml-4 space-y-6">
                <div className="text-white text-xs tracking-wider">LOREM</div>
                <div className="text-white text-xs tracking-wider">IPSUM</div>
                <div className="text-white text-xs tracking-wider">DOLOR SIT</div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:ml-32 relative">
            <div className="text-center mb-12">
              <h3 className="text-white text-2xl md:text-3xl font-normal tracking-[2px] mb-4">
                {metricsData[currentSection].title}
              </h3>
              <div className="flex justify-center space-x-2">
                {metricsData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSection ? 'bg-[#DDB9A2]' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {metricsData[currentSection].metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-white text-3xl md:text-5xl font-normal mb-4 tracking-wider">
                    {metric.value}
                  </div>
                  <div className="text-white text-xs tracking-wider leading-6">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#282828] hidden md:block"></div>
            <div className="absolute top-8 right-0 w-1/2 h-0.5 bg-[#282828] hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
