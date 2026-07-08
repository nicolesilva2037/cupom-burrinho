import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroMascot from "./HeroMascot";
import useHeroMouse from "./useHeroMouse";

export default function Hero() {
  const render = useHeroMouse();

  return (
    <section className="relative overflow-hidden -mt-20">
      <HeroBackground render={render} />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <HeroContent render={render} />

        <HeroMascot render={render} />
      </div>
    </section>
  );
}
