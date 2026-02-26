import { useState } from "react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const PhotoGallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="relative z-10 px-4 py-16 max-w-5xl mx-auto">
      <h2 className="animate-fade-in-up font-dancing text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        My Favorite Pictures of My Buuubuuuuu 📸
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className={`animate-fade-in-up delay-${(i + 1) * 100} gallery-photo glass-card overflow-hidden cursor-pointer group`}
            onClick={() => setLightbox(src)}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="glass-card-strong p-2 max-w-lg w-full animate-fade-in-up">
            <img src={lightbox} alt="Lightbox" className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
