import burrinho from "../../assets/Images/burrinho-mascot.png";

export default function FooterBrand() {
  return (
    <div className="flex items-center gap-2">
      <img src={burrinho} alt="Mascote Clube do Burrinho" className="h-8 w-8" />

      <span className="font-display font-bold text-foreground">
        Clube do Burrinho
      </span>
    </div>
  );
}
