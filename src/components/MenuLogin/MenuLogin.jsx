import { Link } from "react-router-dom";
import menuLogin from "../../data/menuLogin.json";
import MenuItemLog from "./MenuItemLog";

export default function MenuLogin({ current }) {
  const item = menuLogin.find((i) => i.label.toLowerCase() !== current);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-md hover:opacity-80 transition-opacity"
        >
          Cupom do <span className="text-orange-400">Burrinho</span>
        </Link>

        <div className="flex items-center gap-4">
          {item && (
            <MenuItemLog
              url={item.url}
              label={item.label}
              customClass={item.customClass}
            />
          )}
        </div>
      </div>
    </header>
  );
}
