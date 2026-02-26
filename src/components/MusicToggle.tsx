import { useState, useRef } from "react";

const notes = ["♪", "♬", "♫", "♩", "🎵", "🎶"];

interface FloatingNote {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const [floatingNotes, setFloatingNotes] = useState<FloatingNote[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://cdn.pixabay.com/audio/2024/11/29/audio_f0c53eb6d8.mp3"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
      // burst music notes
      const newNotes: FloatingNote[] = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        emoji: notes[Math.floor(Math.random() * notes.length)],
        x: (Math.random() - 0.5) * 60,
        y: -Math.random() * 50 - 20,
      }));
      setFloatingNotes(newNotes);
      setTimeout(() => setFloatingNotes([]), 1200);
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggle}
        className={`glass-card-strong w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 border-2 cursor-pointer ${
          playing ? "animate-rainbow-border animate-wiggle" : "border-primary/20"
        }`}
        aria-label="Toggle music"
      >
        {playing ? "🎵" : "🔇"}
      </button>
      {playing && (
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary animate-pulse" />
      )}
      {floatingNotes.map((n) => (
        <span
          key={n.id}
          className="absolute bottom-full left-1/2 pointer-events-none text-xl text-primary"
          style={{
            animation: "music-note-float 1s ease-out forwards",
            transform: `translate(${n.x}px, ${n.y}px)`,
          }}
        >
          {n.emoji}
        </span>
      ))}
    </div>
  );
};

export default MusicToggle;
