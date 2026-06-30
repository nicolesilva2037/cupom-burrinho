import AuthLayout from "../components/AuthLayout/AuthLayout";
import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AuthLayout
      current="login"
      title="Bem-vindo!"
      subtitle="Entre para liberar seus cupons exclusivos."
    >
      <LoginForm />

      <p className="text-sm text-muted-foreground mt-6 text-center">
        Ainda não faz parte do clube?{" "}
        <Link
          to="/cadastro"
          className="font-bold text-blue-burrinho-deep underline"
        >
          Criar conta
        </Link>
      </p>
    </AuthLayout>
  );
}
