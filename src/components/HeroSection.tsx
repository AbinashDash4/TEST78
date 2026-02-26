import heroPhoto from "@/assets/hero-photo.png";

const HeroSection = () => (
  <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
    <div className="animate-bounce-in">
      <div className="relative hero-photo mx-auto mb-8 w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg animate-gentle-bounce animate-rainbow-border">
        <img src={heroPhoto} alt="Buuubuuuuu" className="w-full h-full object-cover" />
        {/* Decorative corner emojis */}
        <span className="absolute -top-2 -left-2 text-2xl animate-wiggle">🌸</span>
        <span className="absolute -top-2 -right-2 text-2xl animate-wiggle" style={{ animationDelay: "0.3s" }}>💖</span>
        <span className="absolute -bottom-2 -left-2 text-2xl animate-wiggle" style={{ animationDelay: "0.6s" }}>✨</span>
        <span className="absolute -bottom-2 -right-2 text-2xl animate-wiggle" style={{ animationDelay: "0.9s" }}>🦋</span>
      </div>
    </div>
    <h1 className="animate-fade-in-up delay-200 font-dancing text-5xl md:text-7xl font-bold text-primary mb-4">
      To My Buuubuuuuu 💕
    </h1>
    <div className="animate-fade-in-up delay-300 flex items-center gap-2 mb-6">
      <span className="text-lg">🌸</span>
      <span className="h-px w-16 bg-primary/30" />
      <span className="text-lg">💗</span>
      <span className="h-px w-16 bg-primary/30" />
      <span className="text-lg">🌸</span>
    </div>
    <p className="animate-fade-in-up delay-400 text-lg md:text-xl text-muted-foreground max-w-md font-poppins font-light italic">
      Distance means nothing when someone means everything.
    </p>
    <div className="animate-fade-in-up delay-600 mt-8 flex gap-3">
      {["💕", "🌸", "✨", "🦋", "💖"].map((e, i) => (
        <span key={i} className="text-2xl animate-gentle-bounce" style={{ animationDelay: `${i * 0.3}s` }}>
          {e}
        </span>
      ))}
    </div>
  </section>
);

export default HeroSection;
