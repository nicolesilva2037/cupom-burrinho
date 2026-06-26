export default function PartnerCard({ name }) {
  return (
    <div
      className="
      bg-card 
      border-2 
      border-border 
      rounded-2xl 
      p-6 
      flex 
      items-center 
      justify-center 
      gap-2 
      hover:border-blue-burrinho 
      hover:scale-105 
      transition-all
      "
    >

      <span className="text-blue-burrinho-deep text-lg">
        🛍️
      </span>

      <span className="font-display font-bold text-foreground">
        {name}
      </span>

    </div>
  );
}