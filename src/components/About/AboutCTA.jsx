import burrinho from "../../assets/images/burrinho-mascot.png";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="mx-auto px-4 pb-16 bg-linear-to-b from-[#fefeff] to-[#eaf5ff]">
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 bg-orange-400">
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-[-0.01em]">
                Bora fazer parte do clube?
              </h2>

              <p className="mt-2 opacity-90">
                Cadastre-se e comece a economizar nas suas lojas favoritas
                agora mesmo.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md">
                <Link
                  to="/Cadastro"
                  className="rounded-full px-6 py-3 bg-blue-burrinho-deep font-bold text-sm hover:scale-105 transition-transform text-primary-foreground text-center"
                >
                  Quero me cadastrar
                </Link>
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
