import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function FooterContact() {
  const items = [
    { icon: FaEnvelope, text: "contato@cupomdoburrinho.com.br" },
    { icon: FaWhatsapp, text: "(11) 91234-5678" },
    { icon: FaMapMarkerAlt, text: "São Paulo, SP" },
  ];

  return (
    <div className="flex flex-col items-center md:items-start gap-3">
      <h4 className="font-display font-bold text-foreground">
        Fale com a gente
      </h4>

      <ul className="flex flex-col gap-2.5">
        {items.map(({ icon: Icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-2.5 text-sm text-muted-foreground"
          >
            <Icon className="text-blue-burrinho shrink-0" size={14} />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
