import burrinho from "../../assets/Images/burrinho-mascot.png";
export default function Newsletter() {
  return (
    <section className=" mx-auto px-4 pb-16 ">
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 bg-orange-400 ">
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center ">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-[-0.01em] ">
                Fique por dentro das novas parcerias
              </h2>

              <p className="mt-2 opacity-90">
                Deixe seu e-mail para avisarmos sempre que um novo restaurante
                ou loja entrar para o clube.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 rounded-full bg-card text-foreground px-5 py-3 text-sm font-medium focus:outline-none border-none"
                />

                <button
                  className="
                rounded-full
                px-6
                py-2.5
                bg-blue-burrinho-deep
                font-bold 
                text-sm 
                hover:scale-105 
                transition-transform 
                text-primary-foreground
                "
                >
                  Quero Novidades
                </button>
              </div>
            </div>

            <img
              src={burrinho}
              alt=""
              className="hidden md:block w-40 h-40 animate-wiggle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
