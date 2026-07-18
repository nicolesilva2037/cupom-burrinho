import Menu from "../Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h3 className="font-bold text-md md:order-1 order-2 px-8">
          Cupom do <span className="text-orange-400">Burrinho</span>
        </h3>
        <div className="order-1 md:order-2">
          <Menu />
        </div>

        <div className="flex items-center gap-4 order-3">
          {isAuthenticated ? (
            <>
              <Link
                to="/perfil"
                className="text-sm font-bold text-foreground hover:text-blue-burrinho-deep transition-colors"
              >
                Meu perfil
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:scale-105 transition-transform"
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:scale-105 transition-transform inline-block"
            >
              Entrar no Clube
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
