import { useEffect } from "react";
import { Link } from "react-router-dom";
import coupons from "../../data/couponsData.json";
import { useAuth } from "../../context/AuthContext";

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
            <h3 className="font-display font-bold text-xl">
              {store.name}
            </h3>
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

        <div className="flex flex-col gap-3">
          {storeCoupons.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Nenhum cupom disponível para esta loja no momento.
            </p>
          )}

          {storeCoupons.map((coupon) => {
            const jaResgatado = !!user?.redeemedCoupons?.includes(coupon.id);

            return (
              <div
                key={coupon.id}
                className="
                  rounded-2xl border-2 border-border
                  p-4
                  flex items-center justify-between gap-4
                "
              >
                <div className="min-w-0">
                  <p className="font-bold text-sm sm:text-base wrap-break-word">
                    {coupon.title}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Desconto: {coupon.discount}
                  </p>
                  {isAuthenticated && jaResgatado && (
                    <p className="mt-1 text-xs sm:text-sm font-bold text-blue-burrinho-deep">
                      Código: {coupon.code}
                    </p>
                  )}
                </div>

                <div className="shrink-0 text-right">
                  {isAuthenticated ? (
                    <button
                      onClick={() => redeemCoupon(coupon.id)}
                      disabled={jaResgatado}
                      className="
                        rounded-full
                        bg-primary
                        px-4 py-2
                        text-xs sm:text-sm font-bold
                        text-primary-foreground
                        transition-transform
                        hover:scale-105
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                        disabled:hover:scale-100
                        flex items-center gap-1.5
                      "
                    >
                      {jaResgatado ? "✅ Resgatado" : "Resgatar"}
                    </button>
                  ) : (
                    <button
                      disabled
                      className="
                        rounded-full
                        bg-black/10
                        px-4 py-2
                        text-xs sm:text-sm font-bold
                        text-muted-foreground
                        cursor-not-allowed
                        flex items-center gap-1.5
                      "
                    >
                      🔒 Resgatar
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {storeCoupons.length > 0 && !isAuthenticated && (
          <p className="mt-4 text-sm text-center text-muted-foreground">
            Faça{" "}
            <Link
              to="/Login"
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
