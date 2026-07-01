import { useEffect, useRef, useState } from "react";
import burrinho from "../../assets/Images/burrinho-mascot.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isHoveringMascot, setIsHoveringMascot] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const [render, setRender] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(e) {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useEffect(() => {
    let raf;
    const animate = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.08;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.08;
      setRender({
        x: smooth.current.x,
        y: smooth.current.y,
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <section className="relative overflow-hidden bg-gradient-sky -mt-20">
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${
            render.x * 50 + 50
          }% ${render.y * 50 + 50}%, rgba(59,130,246,0.18), transparent 45%)`,
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-300/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-52 h-52 rounded-full bg-sky-200/30 blur-3xl animate-[floatSoft_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl animate-[floatSoft_10s_ease-in-out_infinite]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="z-10">
          <h1
            className="mt-5 text-5xl md:text-6xl font-display font-bold leading-tight text-foreground transition-transform duration-300"
            style={{
              transform: `translate(${render.x * 4}px, ${render.y * 4}px)`,
            }}
          >
            Economize com o{" "}
            <span className="text-primary relative">
              Burrinho
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/40 blur-sm" />
            </span>{" "}
            mais esperto de Taubaté!
          </h1>
          <p
            className="mt-5 text-lg text-muted-foreground max-w-lg transition-transform duration-300"
            style={{
              transform: `translate(${render.x * 2}px, ${render.y * 2}px)`,
            }}
          >
            Faça parte do nosso clube de benefícios e libere cupons de desconto
            exclusivos nos melhores restaurantes e lojas da região.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="como-funciona"
              className="group relative rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-lg
              transition-all duration-300 hover:scale-[1.04] hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10">Assinar o Clube</span>
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
        <div className="relative hidden md:flex justify-center items-center z-10">
          <div className="absolute w-72 h-72 rounded-full bg-blue-200/40 blur-3xl animate-pulse" />
          <img
            src={burrinho}
            alt="Mascote burrinho azul segurando cupom"
            onMouseEnter={() => setIsHoveringMascot(true)}
            onMouseLeave={() => setIsHoveringMascot(false)}
            className={`relative w-220 max-w-full drop-shadow-2xl transition-transform duration-500 ease-out
              ${isHoveringMascot ? "scale-110 rotate-1" : "scale-100"}
              animate-float`}
            style={{
              transform: `
                translate(${render.x * 12}px, ${render.y * 12}px)
                scale(${isHoveringMascot ? 1.1 : 1})
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
