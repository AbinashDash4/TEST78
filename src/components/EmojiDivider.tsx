const dividers = [
  ["🌸", "💕", "🌸", "💕", "🌸"],
  ["🦋", "✨", "🦋", "✨", "🦋"],
  ["💖", "🌷", "💖", "🌷", "💖"],
  ["⭐", "🎀", "⭐", "🎀", "⭐"],
  ["🌺", "💗", "🌺", "💗", "🌺"],
];

interface EmojiDividerProps {
  variant?: number;
}

const EmojiDivider = ({ variant = 0 }: EmojiDividerProps) => {
  const emojis = dividers[variant % dividers.length];
  return (
    <div className="relative z-10 flex items-center justify-center gap-3 py-6 select-none">
      {emojis.map((e, i) => (
        <span
          key={i}
          className="text-xl md:text-2xl animate-gentle-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {e}
        </span>
      ))}
    </div>
  );
};

export default EmojiDivider;
