import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "cupomBurrinho.auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  function login({ email, senha }) {
    setUser({
      email,
      senha,
      nome: "Nome do usuário",
      cpf: "000.000.000-00",
      redeemedCoupons: [],
    });
  }

  function logout() {
    setUser(null);
  }

  function redeemCoupon(couponId) {
    setUser((prev) => {
      if (!prev || prev.redeemedCoupons.includes(couponId)) return prev;
      return {
        ...prev,
        redeemedCoupons: [...prev.redeemedCoupons, couponId],
      };
    });
  }

  function updateProfile({ email, senhaAtual, novaSenha, confirmarSenha }) {
    const querTrocarSenha = senhaAtual || novaSenha || confirmarSenha;

    if (querTrocarSenha) {
      if (!senhaAtual || senhaAtual !== user?.senha) {
        return { success: false, error: "Senha atual incorreta." };
      }
      if (!novaSenha || !confirmarSenha) {
        return {
          success: false,
          error: "Preencha a nova senha e a confirmação.",
        };
      }
      if (novaSenha !== confirmarSenha) {
        return {
          success: false,
          error: "A nova senha e a confirmação não coincidem.",
        };
      }
    }

    setUser((prev) =>
      prev
        ? { ...prev, email, senha: querTrocarSenha ? novaSenha : prev.senha }
        : prev,
    );

    return { success: true };
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        redeemCoupon,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
