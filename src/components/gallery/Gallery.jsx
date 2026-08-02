import React, { useState, useEffect } from "react";
import ElementsCanvas from "../recruitment/ElementsCanvas";
import { Image as ImageIcon, Camera } from "lucide-react";

// Dynamically import all images dropped into src/assets/gallery/ or src/components/gallery/
const assetModules = import.meta.glob("../../assets/gallery/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}", { eager: true });
const componentModules = import.meta.glob("./*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}", { eager: true });
const imageModules = { ...assetModules, ...componentModules };

const autoGalleryPhotos = Object.keys(imageModules).map((path, index) => {
  const fileName = path.split("/").pop().split(".")[0];
  const formattedTitle = fileName.replace(/[-_]/g, " ").toUpperCase();
  return {
    id: index + 1,
    title: formattedTitle || `Event Photo ${index + 1}`,
    category: "All Moments",
    date: "Gallery Photo",
    img: imageModules[path].default || imageModules[path],
  };
});

export default function Gallery() {
  const [photos] = useState(autoGalleryPhotos);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play Slideshow Timer (if multiple photos exist)
  useEffect(() => {
    let interval;
    if (photos.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [photos.length]);

  const currentSlide = photos[currentIndex] || photos[0];

  return (
    <section id="gallery" className="relative min-h-screen bg-slate-950 py-24 px-6 md:px-12 lg:px-20 text-white overflow-hidden">
      {/* ELEMENTAL AURA CANVAS */}
      <ElementsCanvas />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ImageIcon className="w-4 h-4 text-cyan-400" />
            <span>MEMORIES & EVENT GALLERY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            THE <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">GALLERY</span>
          </h2>
          <p className="text-gray-300 mt-4 text-base md:text-lg font-medium">
            Relive the highlights, late-night hackathons, and celebrations of Team SRM Hackathon.
          </p>
        </div>

        {/* HERO IMAGE SHOWCASE */}
        {photos.length > 0 ? (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-slate-900 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/10">
            <div className="relative h-[400px] sm:h-[520px] md:h-[620px] w-full overflow-hidden">
              <img
                src={currentSlide.img}
                alt="Event Gallery"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        ) : (
          /* EMPTY FOLDER PLACEHOLDER */
          <div className="relative mb-12 rounded-3xl p-12 bg-slate-900/60 border-2 border-dashed border-cyan-500/30 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Camera className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Gallery Folder Ready 📂</h3>
            <p className="text-gray-300 text-sm max-w-lg leading-relaxed">
              Drop your event photos (<span className="text-cyan-300 font-mono font-bold">.jpg, .png, .webp</span>) inside the folder:
            </p>
            <div className="px-4 py-2 rounded-xl bg-slate-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
              tsh/src/assets/gallery/
            </div>
            <p className="text-gray-400 text-xs font-mono">
              They will automatically be detected and rendered live in the gallery!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
