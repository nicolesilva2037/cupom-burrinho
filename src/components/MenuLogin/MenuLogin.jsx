import menuLogin from "../../data/menuLogin.json";
import MenuItemLog from "./MenuItemLog";
import { Link } from "react-router-dom";
import burrinho from "../../assets/images/burrinho-mascot.png";

export default function MenuLogin({ current }) {
  // acha o item que NÃO é a página atual — esse é o botão a mostrar
  const item = menuLogin.find((i) => i.label.toLowerCase() !== current);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={burrinho} alt="Mascote Burrinho" className="h-9 w-9" />
          <span className="font-display font-bold text-lg text-foreground">
            Clube do Burrinho
          </span>
        </Link>

        <MenuItemLog
          url={item.url}
          label={item.label}
          customClass={item.customClass}
        />
      </div>
    </header>
  );
}
