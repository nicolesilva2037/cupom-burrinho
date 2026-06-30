import React, { useState } from "react";
import menuItems from "../../data/menuItems.json";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* BOTÃO HAMBÚRGUER (Aparece só no mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 md:hidden text-foreground focus:outline-none z-50"
        aria-label="Abrir menu"
      >
        {isOpen ? (
          // Ícone de Fechar (X)
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Ícone de Hambúrguer (Três linhas)
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* MENU DESKTOP (O seu código original refinado) */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className={`hover:text-foreground transition-colors ${item.customClass || ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* MENU MOBILE (Usa o mesmo JSON, mas renderiza em lista vertical) */}
      <div
        className={`absolute top-[60px] left-0 w-full bg-card/95 backdrop-blur-md border-b border-border px-6 py-6 flex flex-col gap-4 shadow-lg transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={`mobile-${index}`}
            to={item.url}
            onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um link
            className={`text-base font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-border/40 last:border-0 ${item.customClass || ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
