import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

export default function FooterSocial() {
  const socials = [
    { name: "Instagram", href: "#", icon: FaInstagram },
    { name: "WhatsApp", href: "#", icon: FaWhatsapp },
    { name: "Facebook", href: "#", icon: FaFacebookF },
    { name: "TikTok", href: "#", icon: FaTiktok },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="
            h-9 w-9 flex items-center justify-center
            rounded-full
            bg-accent text-blue-burrinho-deep
            hover:bg-primary hover:text-primary-foreground
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
