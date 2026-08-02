import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import SpiderIntro from '../components/intro/SpiderIntro';
import SpiderCursor from '../components/common/SpiderCursor';
import Navbar from '../components/common/Navbar';
import SpiderHeroSection from '../components/hero/SpiderHeroSection';
import SpiderSwingSection from '../components/scrolly/SpiderSwingSection';
import WebJourneySection from '../components/recruitment/WebJourneySection';
import SpiderTeamsComic from '../components/Teams/SpiderTeamsComic';
import SpiderSenseSection from '../components/sense/SpiderSenseSection';
import SpiderWebTimeline from '../components/timeline/SpiderWebTimeline';
import WebCocoonRegistration from '../components/registration/WebCocoonRegistration';
import SpiderFAQ from '../components/faq/SpiderFAQ';
import SpiderFinalCTA from '../components/cta/SpiderFinalCTA';
import SpiderFooter from '../components/Footer/SpiderFooter';

const Home = () => {
  const [introFinished, setIntroFinished] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-[#040404] min-h-screen text-white overflow-x-hidden">
      {/* 1. Marvel Web Intro Animation */}
      {!introFinished && <SpiderIntro onComplete={() => setIntroFinished(true)} />}

      {/* 2. Custom Spider Cursor & Web Splash Engine */}
      <SpiderCursor />

      {/* 3. Floating Glassmorphism Navbar */}
      <Navbar />

      {/* 4. Main Viewport Cinematic NYC Skyline Hero */}
      <SpiderHeroSection />

      {/* 5. Scene 1: Rooftop Swing Scrollytelling */}
      <SpiderSwingSection />

      {/* 6. Scene 2: Recruitment Journey Cards */}
      <WebJourneySection />

      {/* 7. Scene 3: Meet the Spider Teams (Comic Panels) */}
      <SpiderTeamsComic />

      {/* 8. Scene 4: Spider-Sense Interactive Mode */}
      <SpiderSenseSection />

      {/* 9. Scene 5: Spider Web Network Timeline */}
      <SpiderWebTimeline />

      {/* 10. Scene 6: Web Cocoon Registration Portal */}
      <WebCocoonRegistration />

      {/* 11. FAQ Section */}
      <SpiderFAQ />

      {/* 12. Scene 7: Final Heroic CTA */}
      <SpiderFinalCTA />

      {/* 13. Footer */}
      <SpiderFooter />
    </div>
  );
};

export default Home;
