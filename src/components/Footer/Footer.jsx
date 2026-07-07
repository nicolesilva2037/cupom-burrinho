import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <FooterBrand />
          <FooterNav />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}
