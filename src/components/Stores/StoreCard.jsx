export default function StoreCard({ store }) {
  return (
    <div>
      <div
        className="
      bg-card
      border-2
      border-border
      rounded-2xl
      p-6
      hover:border-blue-burrinho
      hover:scale-105
      transition-all
      "
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛍️</span>
          <div>
            <h3 className="font-display font-bold text-lg">{store}</h3>
            <p className="text-sm text-muted-foreground">
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
        py-2
        font-bold
        text-primary-foreground
        "
        >
          Ver desconto
        </button>
      </div>
    </div>
  );
}
