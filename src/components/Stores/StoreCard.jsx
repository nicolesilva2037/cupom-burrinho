export default function StoreCard({ store }) {
  return (
    <div
      className="
        bg-card
        border-2
        border-border
        rounded-2xl
        p-4          
        md:p-6       
        hover:border-blue-burrinho
        hover:scale-105
        transition-all
        w-full     
      "
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl shrink-0">🛍️</span>
        <div>
          <h3 className="font-display font-bold text-base md:text-lg text-foreground truncate">
            {store}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            Cupom exclusivo para assinantes
          </p>
        </div>
      </div>

      <button
        className="
    mt-5
    w-full
    rounded-full
    bg-primary
    py-2.5
    text-sm
    font-bold
    text-primary-foreground
    shadow-soft
    whitespace-nowrap
  "
      >
        Ver desconto
      </button>
    </div>
  );
}
