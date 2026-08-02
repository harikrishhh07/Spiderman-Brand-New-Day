import GridBackground from "../ui/GridBackground";
import heroAvatar from "../../assets/images/hero-avatar.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020617] via-[#040d1a] to-[#020409]">

      {/* GRID BACKGROUND */}
      <GridBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">

            {/* AVATAR RECRUITMENT BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950/90 border border-cyan-400/70 shadow-[0_0_25px_rgba(6,182,212,0.5)] backdrop-blur-xl animate-pulse">
              <span className="text-xl animate-bounce">⚡</span>
              <span className="text-xs md:text-sm font-extrabold tracking-wider bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 bg-clip-text text-transparent uppercase">
                WE ARE RECRUITING 2026 | ENTER THE AVATAR STATE
              </span>
              <span className="text-xl animate-bounce">🌊</span>
            </div>

            {/* CLUB NAME */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
              style={{ fontFamily: "'Cinzel', 'Poppins', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                TEAM SRM HACKATHON
              </span>
            </h1>

            {/* TAGLINE */}
            <p className="text-cyan-100/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-light">
              Empowering students to{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent font-extrabold">
                innovate, build, and lead
              </span>{" "}
              through cutting-edge technology, creativity, and collaboration.
            </p>

            {/* DESCRIPTION */}
            <p className="text-slate-300/80 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              We organize hackathons, ideathons, workshops, and technical events
              that help students develop real-world skills and turn ambitious ideas into impact.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">

              {/* RECRUITMENT BUTTON */}
              <button
                onClick={() => {
                  document.getElementById("recruitment")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-extrabold hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition duration-300 shadow-lg flex items-center justify-center gap-2 border border-cyan-300/60 cursor-pointer animate-pulse"
              >
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent font-black text-sm uppercase tracking-wider">
                  🔥 JOIN RECRUITMENT NOW
                </span>
              </button>

              <button
                onClick={() => {
                  const element = document.querySelector('[data-section="events"]');
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 font-semibold border border-cyan-500/40 hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer text-sm"
              >
                Explore Events
              </button>

            </div>

            {/* STATS STRIP */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-cyan-500/20">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-cyan-300 font-mono">500+</p>
                <p className="text-xs text-slate-400">Club Members</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-sky-300 font-mono">25+</p>
                <p className="text-xs text-slate-400">Events Hosted</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-blue-400 font-mono">4</p>
                <p className="text-xs text-slate-400">Core Domains</p>
              </div>
            </div>

          </div>

          {/* RIGHT HERO IMAGE COLUMN (PIN HERO AVATAR STATE) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">

              {/* Glowing Background Blur Aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse"></div>

              {/* Image Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.4)] bg-slate-950/80 backdrop-blur-xl">

                <img
                  src={heroAvatar}
                  alt="Avatar State Glowing Eyes and Arrow"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700 max-h-[500px]"
                />

                {/* Glassmorphic Overlay Badge */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-950/85 border border-cyan-400/40 backdrop-blur-md flex items-center justify-between shadow-xl">
                  <div>
                    <p className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">AVATAR STATE</p>
                    <p className="text-sm font-semibold text-white">Mastering All Tech Elements</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    ⚡
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}