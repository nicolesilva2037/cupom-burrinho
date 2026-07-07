import menuLogin from "../../data/menuLogin.json";
import MenuItemLog from "./MenuItemLog";

export default function MenuLogin({ current }) {
  const item = menuLogin.find((i) => i.label.toLowerCase() !== current);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h3 className="font-bold text-md">
          Cupom do <span className="text-orange-400">Burrinho</span>
        </h3>

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
