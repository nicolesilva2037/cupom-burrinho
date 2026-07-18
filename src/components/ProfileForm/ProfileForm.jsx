import { useState } from "react";
import FormField from "../FormField/FormField";
import { useAuth } from "../../context/AuthContext";

function censurarCpf(cpf) {
  const digitos = cpf.replace(/\D/g, "");
  if (digitos.length !== 11) return cpf;
  return `${digitos.slice(0, 3)}.***.***-${digitos.slice(9)}`;
}

export default function ProfileForm({ usuario }) {
  const { updateProfile } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(usuario.email);
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [status, setStatus] = useState("");

  function limparCamposSenha() {
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    const resultado = updateProfile({
      email,
      senhaAtual,
      novaSenha,
      confirmarSenha,
    });

    if (!resultado.success) {
      setErro(resultado.error);
      return;
    }

    limparCamposSenha();
    setStatus("Alterações salvas.");
    setIsEditing(false);
  }

  function handleCancelar() {
    setEmail(usuario.email);
    limparCamposSenha();
    setErro("");
    setIsEditing(false);
  }

  return (
    <div className="mt-8 bg-card rounded-2xl border-2 border-border shadow-soft p-7 md:p-8">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <FormField
            id="email"
            label="E-mail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <hr className="border-border" />

          <p className="text-sm font-semibold text-foreground -mb-2">
            Alterar senha (opcional)
          </p>

          <FormField
            id="senhaAtual"
            label="Senha atual"
            type="password"
            placeholder="Deixe em branco para manter a senha atual"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
          />

          <FormField
            id="novaSenha"
            label="Nova senha"
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />

          <FormField
            id="confirmarSenha"
            label="Confirmar nova senha"
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          {erro && <p className="text-sm font-medium text-red-600">{erro}</p>}

          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
            >
              Salvar alterações
            </button>
            <button
              type="button"
              onClick={handleCancelar}
              className="rounded-full border-2 border-border px-6 py-2.5 text-sm font-bold text-muted-foreground hover:bg-background transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Nome completo
            </p>
            <p className="text-sm text-muted-foreground">{usuario.nome}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">CPF</p>
            <p className="text-sm text-muted-foreground">
              {censurarCpf(usuario.cpf)}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">E-mail</p>
            <p className="text-sm text-muted-foreground">{usuario.email}</p>
          </div>

          {status && (
            <p className="text-sm font-medium text-green-700">{status}</p>
          )}

          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="mt-2 self-start rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
          >
            Editar informações
          </button>
        </div>
      )}
    </div>
  );
}
