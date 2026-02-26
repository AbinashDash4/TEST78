const reasons = [
  { emoji: "🌈", text: "She makes my worst days better", sticker: "☁️" },
  { emoji: "🤫", text: "She understands my silence", sticker: "🫂" },
  { emoji: "😂", text: "She laughs at my stupid jokes", sticker: "🤣" },
  { emoji: "💖", text: "She is my forever best friend", sticker: "👯‍♀️" },
];

const SpecialSection = () => (
  <section className="relative z-10 px-4 py-16 max-w-4xl mx-auto">
    <h2 className="animate-fade-in-up font-dancing text-4xl md:text-5xl font-bold text-primary text-center mb-12">
      Reasons Why My Buuubuuuuu is Special 🌸
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {reasons.map((r, i) => (
        <div
          key={i}
          className="animate-fade-in-up glass-card-strong p-8 text-center hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          style={{ animationDelay: `${(i + 1) * 0.2}s` }}
        >
          <span className="absolute top-2 right-3 text-lg opacity-40 group-hover:opacity-80 transition-opacity">
            {r.sticker}
          </span>
          <span className="text-4xl mb-4 block group-hover:animate-wiggle">{r.emoji}</span>
          <p className="font-poppins text-lg text-foreground font-medium">{r.text}</p>
          <div className="mt-3 flex justify-center gap-1">
            {["💕", "✨", "💕"].map((s, j) => (
              <span key={j} className="text-xs opacity-50">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SpecialSection;
