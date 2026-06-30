export default function StoreCard({ store }) {
  return (
    <div>
      <div
        className="
    group relative
    bg-card
    border-2 border-border
    rounded-2xl
    p-6
    transition-all duration-300 ease-out
    hover:border-blue-burrinho
    hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]
    hover:-translate-y-2
  "
      >
        <div
          className="
      absolute inset-0 rounded-2xl
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
      pointer-events-none
    "
        />

        <div className="flex items-center gap-3 relative z-10">
          <span
            className="
        text-2xl
        transition-transform duration-300
        group-hover:scale-110
        group-hover:rotate-6
      "
          >
            🛍️
          </span>

          <div>
            <h3
              className="
          font-display font-bold text-lg
          transition-colors duration-300
          group-hover:text-blue-burrinho
        "
            >
              {store}
            </h3>

            <p className="text-sm text-muted-foreground">
              Cupom exclusivo para assinantes
            </p>
          </div>
        </div>

        <button
          className="
      mt-5 w-full
      rounded-full
      bg-blue-600
      py-2 font-bold
      text-primary-foreground

      transition-all duration-300 ease-out
      hover:scale-[1.03]
      hover:shadow-lg
      active:scale-95

      relative overflow-hidden
      group/btn
    "
        >
          <span
            className="
        absolute inset-0
        bg-white/20
        translate-x-[-full]
        group-hover/btn:translate-x-[full]
        transition-transform duration-700
      "
          />

          <span className="relative z-10">Ver desconto</span>
        </button>
      </div>
    </div>
  );
}
