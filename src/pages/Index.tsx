import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import QuotesSection from "@/components/QuotesSection";
import SpecialSection from "@/components/SpecialSection";
import MissButton from "@/components/MissButton";
import FinalMessage from "@/components/FinalMessage";
import MusicToggle from "@/components/MusicToggle";
import SparkleTrail from "@/components/SparkleTrail";
import EmojiDivider from "@/components/EmojiDivider";

const Index = () => (
  <div className="relative min-h-screen bg-gradient-to-b from-background via-card to-secondary/30 overflow-hidden">
    <FloatingHearts />
    <SparkleTrail />
    <HeroSection />
    <EmojiDivider variant={0} />
    <PhotoGallery />
    <EmojiDivider variant={1} />
    <QuotesSection />
    <EmojiDivider variant={2} />
    <SpecialSection />
    <EmojiDivider variant={3} />
    <MissButton />
    <EmojiDivider variant={4} />
    <FinalMessage />
    <MusicToggle />
  </div>
);

export default Index;
