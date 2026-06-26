import burrinho from "../Assets/Images/burrinho-mascot.png";
export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div
        className="
        max-w-6xl 
        mx-auto 
        px-4 
        py-8 
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between 
        gap-4
      "
      >
        <div className="flex items-center gap-2">
          <img src={burrinho} alt="" className="h-8 w-8" />

          <span className="font-display font-bold text-foreground">
            Clube do Burrinho
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Clube do Burrinho. Descontos exclusivos
          sob assinatura.
        </p>
      </div>
    </footer>
  );
}
