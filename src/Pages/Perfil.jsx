import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import EmptyState from "../components/EmptyState/EmptyState";

export default function Perfil() {
  // TODO: trocar por dados reais (vindos da API/contexto de autenticação)
  const usuario = {
    nome: "Nome do usuário",
    email: "email@exemplo.com",
    cpf: "000.000.000-00",
  };

  return (
    <div className="bg-orange-500 min-h-screen flex flex-col font-sans bg-linear-to-b from-[#fefeff] to-[#eaf5ff] text-foreground">
      <Navbar loggedIn />

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

          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Meus cupons salvos
            </h2>
            <EmptyState
              message="Você ainda não salvou nenhum cupom. Vá até"
              linkText="nossas lojas parceiras"
              linkTo="/lojas"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
