import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ContactNotice from "../components/ProfileForm/ContactNotice";
import EmptyState from "../components/EmptyState/EmptyState";
import { useAuth } from "../context/AuthContext";
import coupons from "../data/couponsData.json";

export default function Perfil() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const usuario = user;
  const cuponsResgatados = coupons.filter((coupon) =>
    (usuario.redeemedCoupons || []).includes(coupon.id),
  );

  return (
    <div className="bg-orange-500 min-h-screen flex flex-col font-sans bg-linear-to-b from-[#fefeff] to-[#eaf5ff] text-foreground">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="mt-4 text-3xl md:text-4xl font-display font-bold text-foreground">
            Meu perfil
          </h1>
          <p className="mt-2 text-muted-foreground">
            Veja e edite suas informações.
          </p>

          <ProfileAvatar nome={usuario.nome} email={usuario.email} />
          <ProfileForm usuario={usuario} />
          <ContactNotice />

          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Meus cupons salvos
            </h2>
            {cuponsResgatados.length === 0 ? (
              <EmptyState
                message="Você ainda não salvou nenhum cupom. Vá até"
                linkText="nossas lojas parceiras"
                linkTo="/lojas"
              />
            ) : (
              <div className="flex flex-col gap-3">
                {cuponsResgatados.map((coupon) => (
                  <div
                    key={coupon.id}
                    className="
                      rounded-2xl border-2 border-border
                      bg-card
                      p-4
                      flex items-center justify-between gap-4
                    "
                  >
                    <div className="min-w-0">
                      <p className="font-bold text-sm sm:text-base wrap-break-word">
                        {coupon.title}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {coupon.store} · Desconto: {coupon.discount}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm font-bold text-blue-burrinho-deep">
                        {coupon.code}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
