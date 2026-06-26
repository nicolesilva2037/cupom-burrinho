import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-border"
      style={{
        background:
          "color-mix(in oklch, oklch(0.985 0.015 75) 80%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Menu />

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:scale-105 transition-transform inline-block"
          >
            Entrar no Clube
          </Link>
        </div>
      </div>
    </header>
  );
}
