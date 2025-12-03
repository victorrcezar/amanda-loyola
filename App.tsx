import React from 'react';
import Layout from './components/Layout';
import SlideFactory from './components/SlideFactory';

// Total number of slides
const TOTAL_SLIDES = 15;

// Define which slides should be Dark Mode (Primary Blue Background)
// The others will be Light Mode (Off-White Background)
// Adjusted pattern for better visual storytelling flow
const DARK_SLIDES = [0, 2, 4, 6, 8, 10, 12, 14];

const App: React.FC = () => {
  return (
    <Layout darkSlides={DARK_SLIDES}>
      {Array.from({ length: TOTAL_SLIDES }).map((_, index) => {
        const isDark = DARK_SLIDES.includes(index);
        
        // Dynamic Gradient Logic
        // Dark: Deep Blue to Medium Blue gradient for depth
        // Light: Off-White to Soft Silver gradient to avoid "flat white" look
        const backgroundClass = isDark
            ? 'bg-gradient-to-br from-[#0A1F2E] via-[#0E2F3D] to-[#0A1F2E] border-t border-white/5'
            : 'bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5] border-t border-[#0A1F2E]/5';

        return (
          <section 
            key={index} 
            id={`slide-${index}`}
            className={`w-full relative z-10 transition-colors duration-700 ${backgroundClass}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <SlideFactory index={index} isDark={isDark} />
            </div>
          </section>
        );
      })}
    </Layout>
  );
};

export default App;