import burrinho from "../../assets/images/burrinho-mascot.png";
import FooterSocial from "./FooterSocial";

export default function FooterBrand() {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 max-w-xs px-4 md:mx-0 md:items-start">
      <div className="flex w-full items-center justify-center gap-2 md:justify-start">
        <img
          src={burrinho}
          alt="Mascote Cupom do Burrinho"
          className="h-10 w-10"
        />

        <span className="font-display font-bold text-lg text-foreground">
          Cupom do Burrinho
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
