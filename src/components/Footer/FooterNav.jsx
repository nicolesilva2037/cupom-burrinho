import { Link } from "react-router-dom";

export default function FooterNav() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Lojas",
      path: "/lojas",
    },
    {
      name: "Como Funciona",
      path: "/como-funciona",
    },
    {
      name: "Fale Conosco",
      path: "/contact",
    },
    {
      name: "Sobre Nós",
      path: "/sobre-nos",
    },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
