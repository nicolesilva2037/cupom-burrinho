import { useState } from "react";
import { useNavigate } from "react-router-dom"; // navega via código, sem precisar de <Link>
import FormField from "../FormField/FormField";

export default function CadastroForm() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    if (
      !nome.trim() ||
      !cpf.trim() ||
      !email.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    console.log("Cadastro:", { nome, cpf, email, senha });

    navigate("/login"); // redireciona automaticamente após o cadastro
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <FormField
        id="nome"
        label="Nome completo"
        required
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <FormField
        id="cpf"
        label="CPF"
        required
        placeholder="000.000.000-00"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

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

      <FormField
        id="confirmarSenha"
        label="Confirmar senha"
        type="password"
        required
        placeholder="••••••••"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />

      {erro && <p className="text-sm font-medium text-red-600">{erro}</p>}

      <button
        type="submit"
        className="mt-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
      >
        Criar conta
      </button>
    </form>
  );
}
