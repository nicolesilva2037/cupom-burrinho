import { useState } from "react";
import burrinho from "../../assets/Images/burrinho-mascot.png";

export default function HeroMascot({ render }) {
  const [isHoveringMascot, setIsHoveringMascot] = useState(false);

  return (
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
  );
}
