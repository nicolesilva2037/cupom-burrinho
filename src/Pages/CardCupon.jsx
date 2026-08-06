import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coupons from "../data/couponsData.json";
import { useAuth } from "../context/AuthContext";

function CardCupom({ store, onRedeemed }) {
  const navigate = useNavigate();
  const { isAuthenticated, user, redeemCoupon } = useAuth();
  const [closingIds, setClosingIds] = useState([]);

  const storeCoupons = coupons.filter((cupom) => cupom.store === store?.name);
  const redeemedCoupons = user?.redeemedCoupons || [];

  const handleRedeem = (cupom) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    navigator.clipboard?.writeText(cupom.code);
    setClosingIds((current) => [...current, cupom.id]);

    setTimeout(() => {
      redeemCoupon(cupom.id);
      onRedeemed?.(cupom);
    }, 260);
  };

  return (
    <div className="relative">
      <div className="space-y-4 pt-4">
        {storeCoupons
          .filter((cupom) => !redeemedCoupons.includes(cupom.id))
          .map((cupom) => {
            const isClosing = closingIds.includes(cupom.id);
            return (
              <div
                key={cupom.id}
                className={`overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 ${
                  isClosing
                    ? "opacity-0 scale-95 max-h-0 p-0 border-0"
                    : "hover:-translate-y-1 hover:shadow-2xl"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-slate-900 wrap-break-word">
                      {cupom.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Desconto: {cupom.discount}
                    </p>
                  </div>

                  {isAuthenticated ? (
                    <button
                      onClick={() => handleRedeem(cupom)}
                      className="shrink-0 rounded-xl bg-sky-600 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:bg-sky-700 active:scale-95"
                    >
                      Resgatar
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRedeem(cupom)}
                      title="Faça login para resgatar este cupom"
                      className="shrink-0 flex items-center gap-2 rounded-xl bg-gray-200 px-4 py-3 text-sm font-bold text-gray-500 transition duration-300 hover:bg-gray-300 active:scale-95"
                    >
                      🔒 Entrar
                    </button>
                  )}
                </div>
              </div>
            );
          })}

        {storeCoupons.length > 0 &&
          storeCoupons.every((cupom) => redeemedCoupons.includes(cupom.id)) && (
            <p className="text-sm text-center text-muted-foreground py-2">
              Você já resgatou todos os cupons desta loja. Confira no seu{" "}
              perfil.
            </p>
          )}
      </div>
    </div>
  );
}

export default CardCupom;
