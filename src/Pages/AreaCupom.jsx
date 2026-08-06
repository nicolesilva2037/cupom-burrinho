import { useState } from "react";

function AreaCupom() {
  const [modalOpen, setModalOpen] = useState(false);

  const cupons = [
    {
      id: 1,
      codigo: "MENOSÉMAIS",
      descricao: "10% OFF em compras acima de R$100",
    },
    {
      id: 2,
      codigo: "BURRINHO20",
      descricao: "20% OFF na primeira compra",
    },
    {
      id: 3,
      codigo: "FRETEGRATIS",
      descricao: "Frete grátis para todo o Brasil",
    },
    {
      id: 4,
      codigo: "PIX15",
      descricao: "15% OFF pagando com PIX",
    },
    {
      id: 5,
      codigo: "PROMO30",
      descricao: "30% OFF em produtos selecionados",
    },
    {
      id: 6,
      codigo: "SUPER10",
      descricao: "Ganhe R$10 de desconto",
    },
  ];

  return (
    <>
      <div className="bg-gradient-sky">
        <div
          className={`max-w-6xl mx-auto px-4 py-8 transition-all duration-300 scale-80 ${
            modalOpen ? "blur-sm pointer-events-none select-none" : ""
          }`}
        >
          {/* Cabeçalho da loja */}
          <div className="flex items-center justify-between gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold">Casas Bahia</h1>
              <p className="text-gray-700 mt-2">
                Confira os melhores cupons de desconto disponíveis.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="./src/assets/images/casas bahia teste.png"
                alt="Casas Bahia"
                className="w-60 h-60 rounded-full object-cover shadow-lg mr-15"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex gap-8">
            {/* Lista de Cupons */}
            <div className="w-2/3 space-y-6">
              {cupons.map((cupom) => (
                <div
                  key={cupom.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <img
                        src="./src/assets/images/casas bahia teste.png"
                        alt=""
                        className="w-24 h-24 object-contain"
                      />

                      <div>
                        <h2
                          className="text-2xl font-bold cursor-pointer hover:text-sky-600 transition"
                          onClick={() => {
                            navigator.clipboard.writeText(cupom.codigo);
                            alert("Cupom copiado!");
                          }}
                        >
                          {cupom.codigo}
                        </h2>

                        <p className="text-gray-500 mt-2">{cupom.descricao}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setModalOpen(true)}
                      className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      Resgatar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Outras lojas */}
            <div className="w-1/3">
              <div className="bg-white rounded-2xl shadow-lg mt-1 border p-6 sticky top-24">
                <img
                  src="./src/assets/images/burro_apontando_para_baixo-removebg-preview (1).png"
                  alt=""
                  className="w-40 mx-auto drop-shadow-xl"
                />

                <h2 className="text-2xl font-bold text-center mb-6">
                  Outras{" "}
                  <span className="text-2xl font-bold text-center text-blue-400">
                    {" "}
                    Lojas
                  </span>
                </h2>

                <div className="space-y-4">
                  <div className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all duration-300">
                    Magazine Luiza
                  </div>

                  <div className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all duration-300">
                    Amazon
                  </div>

                  <div className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all duration-300">
                    Mercado Livre
                  </div>

                  <div className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all duration-300">
                    Shopee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MODAL ================= */}

        <div
          onClick={() => setModalOpen(false)}
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
            modalOpen
              ? "opacity-100 visible bg-black/40 backdrop-blur-md"
              : "opacity-0 invisible"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative overflow-hidden bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.35)] w-125 max-w-[90%] p-8 transition-all duration-300 ${
              modalOpen
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-75 opacity-0 translate-y-10"
            }`}
          >
            {/* Brilhos */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-sky-400 rounded-full blur-3xl opacity-30"></div>

            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-sky-600">
                  🎉 Cupom Resgatado!
                </h2>

                <button
                  onClick={() => setModalOpen(false)}
                  className="text-3xl hover:rotate-90 transition duration-300"
                >
                  ✕
                </button>
              </div>

              {/* ALTERE O CONTEÚDO AQUI */}

              <div className="space-y-4">
                <p className="text-gray-700 text-lg">
                  Seu cupom foi resgatado com sucesso.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-800">ASDASDASD</p>

                  <p className="text-3xl font-black text-sky-600 mt-2"></p>
                </div>

                <p className="text-gray-500">
                  Agora basta copiar o código e utilizá-lo na loja.
                </p>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
                >
                  Fechar
                </button>

                <button className="px-6 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 hover:scale-105 transition-all">
                  Ir para Loja
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaCupom;

//  {
//       id: 2,
//       codigo: "BURRINHO20",
//       descricao: "20% OFF na primeira compra",
//     },
//     {
//       id: 3,
//       codigo: "FRETEGRATIS",
//       descricao: "Frete grátis para todo o Brasil",
//     },
//     {
//       id: 4,
//       codigo: "PIX15",
//       descricao: "15% OFF pagando com PIX",
//     },
//     {
//       id: 5,
//       codigo: "PROMO30",
//       descricao: "30% OFF em produtos selecionados",
//     },
//     {
//       id: 6,
//       codigo: "SUPER10",
//       descricao: "Ganhe R$10 de desconto",
//     },
