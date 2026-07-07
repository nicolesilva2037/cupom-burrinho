import { useEffect, useRef, useState } from "react";

export default function useHeroMouse() {
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

  return render;
}
