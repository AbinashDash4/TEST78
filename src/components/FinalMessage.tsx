const FinalMessage = () => (
  <section className="relative z-10 px-4 py-20 max-w-2xl mx-auto text-center">
    <div className="animate-fade-in-up glass-card-strong p-10 md:p-14 relative overflow-hidden">
      {/* corner decorations */}
      <span className="absolute top-3 left-4 text-xl opacity-40">🌸</span>
      <span className="absolute top-3 right-4 text-xl opacity-40">🌸</span>
      <span className="absolute bottom-3 left-4 text-xl opacity-40">💕</span>
      <span className="absolute bottom-3 right-4 text-xl opacity-40">💕</span>

      <p className="font-dancing text-2xl md:text-3xl leading-relaxed text-foreground">
        I know work is tough, and you're far away…
        <br /><br />
        but I'm always just one call away.
        <br /><br />
        <span className="text-primary font-bold text-3xl md:text-4xl">
          Miss you, Buuubuuuuu 💗
        </span>
      </p>
    </div>

    <div className="mt-6 flex justify-center gap-2">
      {["🌸", "💖", "✨", "💗", "🌺", "💕", "🦋"].map((e, i) => (
        <span key={i} className="text-lg animate-gentle-bounce" style={{ animationDelay: `${i * 0.15}s` }}>
          {e}
        </span>
      ))}
    </div>

    <p className="mt-6 text-muted-foreground text-sm font-poppins">
      Made with 💕 for the best Buuubuuuuu in the world
    </p>
  </section>
);

export default FinalMessage;
