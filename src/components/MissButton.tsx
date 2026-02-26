import { useState, useCallback } from "react";

interface BurstHeart {
  id: number;
  tx: string;
  ty: string;
  emoji: string;
}

const MissButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [burstHearts, setBurstHearts] = useState<BurstHeart[]>([]);

  const handleClick = useCallback(() => {
    setShowModal(true);
    const hearts: BurstHeart[] = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      tx: `${(Math.random() - 0.5) * 300}px`,
      ty: `${-Math.random() * 300 - 50}px`,
      emoji: ["💗", "💕", "💖", "❤️", "🌸"][Math.floor(Math.random() * 5)],
    }));
    setBurstHearts(hearts);
    setTimeout(() => setBurstHearts([]), 1500);
  }, []);

  return (
    <section className="relative z-10 px-4 py-16 flex flex-col items-center">
      <div className="relative">
        <button
          onClick={handleClick}
          className="animate-pulse-glow glass-card-strong px-8 py-5 font-dancing text-xl md:text-2xl text-primary font-bold cursor-pointer hover:scale-110 transition-transform duration-300 border-2 border-primary/30"
        >
          Click If You Miss Me Too Buuubuuuuu 💌
        </button>
        {burstHearts.map((h) => (
          <span
            key={h.id}
            className="absolute left-1/2 top-1/2 pointer-events-none text-2xl"
            style={{
              ["--tx" as string]: h.tx,
              ["--ty" as string]: h.ty,
              animation: "heart-burst 1.2s ease-out forwards",
            }}
          >
            {h.emoji}
          </span>
        ))}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="glass-card-strong p-10 max-w-md w-full text-center animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <span className="text-5xl block mb-4">❤️</span>
            <p className="font-dancing text-2xl md:text-3xl text-primary mb-6">
              No matter how far you go, I'm always with you Buuubuuuuu ❤️
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-poppins text-sm hover:opacity-90 transition-opacity"
            >
              Close 💕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MissButton;
