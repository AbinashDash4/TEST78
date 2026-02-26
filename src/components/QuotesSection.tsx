const quotes = [
  { text: "Even miles can't reduce our madness.", emoji: "🤪" },
  { text: "You are my daily dose of happiness.", emoji: "☀️" },
  { text: "No distance can break our friendship.", emoji: "💪" },
  { text: "Miss you more than pizza.", emoji: "🍕" },
  { text: "My Buuubuuuuu will always be my favorite notification.", emoji: "💌" },
];

const QuotesSection = () => (
  <section className="relative z-10 px-4 py-16 max-w-4xl mx-auto">
    <h2 className="animate-fade-in-up font-dancing text-4xl md:text-5xl font-bold text-primary text-center mb-12">
      Cute Quotes 💬
    </h2>
    <div className="space-y-5">
      {quotes.map((q, i) => (
        <div
          key={i}
          className="animate-fade-in-up glass-card p-6 text-center hover:scale-[1.02] transition-transform duration-300 group"
          style={{ animationDelay: `${(i + 1) * 0.15}s` }}
        >
          <span className="text-3xl mb-2 block group-hover:animate-wiggle">{q.emoji}</span>
          <p className="font-dancing text-xl md:text-2xl text-foreground">"{q.text}"</p>
        </div>
      ))}
    </div>
  </section>
);

export default QuotesSection;
