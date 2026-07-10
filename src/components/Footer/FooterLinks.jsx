import { Link } from "react-router-dom";

export default function FooterLinks() {
  const links = [
    { name: "Sobre Nós", path: "/sobre-nos" },
    { name: "Como Funciona", path: "/como-funciona" },
    { name: "Fale Conosco", path: "/contact" },
    { name: "Entrar no Clube", path: "/login" },
  ];

  return (
    <div className="flex flex-col items-center md:items-start gap-3">
      <h4 className="font-display font-bold text-foreground">
        Institucional
      </h4>

      <ul className="flex flex-col items-center md:items-start gap-2.5">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
