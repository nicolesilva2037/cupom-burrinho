import AuthLayout from "../components/AuthLayout/AuthLayout";
import CadastroForm from "../components/CadastroForm/CadastroForm";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <AuthLayout
      current="cadastro"
      badge="Entre para o clube"
      title="Crie sua conta"
      subtitle="Libere cupons exclusivos das lojas parceiras."
    >
      <CadastroForm />

      <p className="text-sm text-muted-foreground mt-6 text-center">
        Já faz parte do clube?{" "}
        <Link
          to="/login"
          className="font-bold text-blue-burrinho-deep underline"
        >
          Entrar
        </Link>
      </p>
    </AuthLayout>
  );
}
