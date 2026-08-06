import { useEffect } from "react";
import { Link } from "react-router-dom";
import coupons from "../../data/couponsData.json";
import { useAuth } from "../../context/AuthContext";
import CardCupom from "../../Pages/CardCupon";

export default function StoreDetailsModal({ store, onClose }) {
  const { isAuthenticated, user, redeemCoupon } = useAuth();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const storeCoupons = coupons.filter((c) => c.store === store.name);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="
          relative z-10 w-full max-w-lg
          max-h-[85vh] overflow-y-auto
          rounded-2xl bg-card
          border-2 border-border
          p-6 sm:p-8
          shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="
            absolute top-4 right-4
            h-8 w-8 flex items-center justify-center
            rounded-full text-muted-foreground
            hover:bg-black/5 hover:text-foreground
            transition-colors
          "
        >
          ✕
        </button>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🛍️</span>
          <div>
            <h3 className="font-display font-bold text-xl">{store.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {store.category}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          {store.description}
        </p>

        <h4 className="mt-6 mb-3 font-display font-bold text-base sm:text-lg">
          Cupons disponíveis
        </h4>
        <CardCupom onClose={onClose} />
        {storeCoupons.length > 0 && !isAuthenticated && (
          <p className="mt-4 text-sm text-center text-muted-foreground">
            Faça{" "}
            <Link
              to=""
              onClick={onClose}
              className="font-bold text-blue-burrinho-deep underline"
            >
              login
            </Link>{" "}
            para resgatar os cupons desta loja.
          </p>
        )}
      </div>
    </div>
  );
}
