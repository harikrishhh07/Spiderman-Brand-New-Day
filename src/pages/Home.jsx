import Navbar from "../components/common/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AvatarRecruitmentSection from "../components/recruitment/AvatarRecruitmentSection";
import RecruitmentPopoutNotification from "../components/common/RecruitmentPopoutNotification";
import AvatarFloatingWidget from "../components/recruitment/AvatarFloatingWidget";
import About from "../components/about/About";
import Domains from "../components/Domains/Domains";
import Events from "../components/Events/Events";
import Gallery from "../components/gallery/Gallery";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="relative bg-slate-950 min-h-screen text-white overflow-x-hidden">
      <Navbar />

      {/* Recruitment Popout Notification Toast beside/below Navbar */}
      <RecruitmentPopoutNotification />

      <div data-section="home">
        <HeroSection />
      </div>

      <AvatarRecruitmentSection />

      <div data-section="about">
        <About />
      </div>
      <div data-section="domains">
        <Domains />
      </div>

      <div data-section="events">
        <Events />
      </div>

      <div data-section="gallery">
        <Gallery />
      </div>

      <div data-section="contact">
        <Contact />
      </div>

      <Footer />

      {/* Floating elemental recruitment quick widget */}
      <AvatarFloatingWidget />
    </div>
  );
};

export default Home;
