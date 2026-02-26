import { useEffect, useState } from "react";

interface FloatingItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  sway: number;
  opacity: number;
}

const heartEmojis = ["💕", "💗", "💖", "💝", "❤️", "🩷", "🩵", "💜", "🤍"];
const flowerEmojis = ["🌸", "🌺", "🌷", "🌹", "🌻", "🏵️", "💐", "🌼"];
const sparkleEmojis = ["✨", "⭐", "🦋", "🎀", "🫧", "💫"];

const allEmojis = [...heartEmojis, ...heartEmojis, ...flowerEmojis, ...sparkleEmojis];

const FloatingHearts = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const initial: FloatingItem[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 26,
      duration: 6 + Math.random() * 14,
      delay: Math.random() * 12,
      emoji: allEmojis[Math.floor(Math.random() * allEmojis.length)],
      sway: 20 + Math.random() * 60,
      opacity: 0.4 + Math.random() * 0.5,
    }));
    setItems(initial);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((h) => (
        <span
          key={h.id}
          className="absolute"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `float-heart-sway ${h.duration}s ease-in-out ${h.delay}s infinite`,
            ["--sway" as string]: `${h.sway}px`,
            opacity: h.opacity,
            bottom: "-40px",
            filter: "drop-shadow(0 0 6px hsla(330, 60%, 65%, 0.3))",
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
