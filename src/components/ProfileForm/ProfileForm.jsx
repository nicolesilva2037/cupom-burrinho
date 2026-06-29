import { useState } from "react";
import FormField from "../FormField/FormField";

export default function ProfileForm({ usuario }) {
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [novaSenha, setNovaSenha] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: integrar com a lógica/API de atualização de perfil
    setStatus("Alterações salvas.");
  }

  function handleCancelar() {
    // type="reset" não funciona com inputs controlados, então resetamos o state na mão
    setNome(usuario.nome);
    setEmail(usuario.email);
    setNovaSenha("");
    setStatus("");
  }

  return (
    <div className="mt-8 bg-card rounded-3xl border-2 border-border shadow-soft p-7 md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <FormField
          id="nome"
          label="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <FormField id="cpf" label="CPF" value={usuario.cpf} disabled />

        <FormField
          id="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          id="novaSenha"
          label="Nova senha (opcional)"
          type="password"
          placeholder="Deixe em branco para manter a senha atual"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
        />

        {status && (
          <p className="text-sm font-medium text-green-700">{status}</p>
        )}

        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-2.5 font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
          >
            Salvar alterações
          </button>
          <button
            type="button"
            onClick={handleCancelar}
            className="rounded-full border-2 border-border px-6 py-2.5 font-bold text-muted-foreground hover:bg-background transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
