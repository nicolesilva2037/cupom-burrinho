import { useState } from "react";
import { useNavigate } from "react-router-dom"; // navega via código, sem precisar de <Link>
import FormField from "../FormField/FormField";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    if (!email.trim() || !senha.trim()) {
      setErro("Preencha e-mail e senha.");
      return;
    }

    // TODO: integrar com a lógica/API de login
    console.log("Login:", { email, senha });

    navigate("/perfil"); // login deu certo, manda pro perfil
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <FormField
        id="email"
        label="E-mail"
        type="email"
        required
        placeholder="seuemail@exemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormField
        id="senha"
        label="Senha"
        type="password"
        required
        placeholder="••••••••"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {erro && <p className="text-sm font-medium text-red-600">{erro}</p>}

      <button
        type="submit"
        className="mt-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
      >
        Entrar
      </button>
    </form>
  );
}
