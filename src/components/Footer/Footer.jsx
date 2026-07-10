import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-14">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-10 md:gap-8
            text-center md:text-left
          "
        >
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
}
