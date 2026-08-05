import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CardCupon({ onClose }) {
  const navigate = useNavigate();
  const redirectTimeoutRef = useRef(null);
  const [redeemedIds, setRedeemedIds] = useState([]);
  const [closingIds, setClosingIds] = useState([]);

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  const cupons = [
    {
      id: 1,
      codigo: "MENOSÉMAIS",
      descricao: "10% OFF em compras acima de R$100",
    },
  ];

  const handleRedeem = (cupom) => {
    navigator.clipboard.writeText(cupom.codigo);
    setClosingIds((current) => [...current, cupom.id]);

    setTimeout(() => {
      setRedeemedIds((current) => [...current, cupom.id]);
      setClosingIds((current) => current.filter((id) => id !== cupom.id));
    }, 240);

    redirectTimeoutRef.current = setTimeout(() => {
      onClose?.();
      navigate("/lojas", {
        state: {
          toast: true,
          message: "✅Cupom Resgatado, dê uma olhada no seu perfil!",
          link: "/Perfil",
          linkText: "Perfil",
        },
      });
    }, 0);
  };

  return (
    <div className="relative">
      <div className="space-y-4 pt-4">
        {cupons
          .filter((cupom) => !redeemedIds.includes(cupom.id))
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
                  <div className="flex items-center gap-4">
                    <img
                      src="./src/assets/images/casas bahia teste.png"
                      alt="Logo da loja"
                      className="h-14 w-14 object-contain"
                    />

                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {cupom.codigo}
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">
                        {cupom.descricao}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRedeem(cupom)}
                    className="rounded-xl bg-sky-600 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:bg-sky-700 active:scale-95"
                  >
                    Resgatar
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CardCupon;
