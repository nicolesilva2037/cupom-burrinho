import burrinho from "../../assets/images/burrinho-mascot.png";
import FooterSocial from "./FooterSocial";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-4 max-w px-4">
      <div className="flex items-center gap-2">
        <img
          src={burrinho}
          alt="Mascote Clube do Burrinho"
          className="h-10 w-10"
        />

        <span className="flex justify-start font-display font-bold text-lg text-foreground">
          Clube do Burrinho
        </span>
      </div>

      <p className="text-sm text-muted-foreground text-center md:text-left">
        O burrinho mais teimoso em achar desconto. Cupons de verdade para
        assinantes de verdade.
      </p>

      <FooterSocial />
    </div>
  );
}
