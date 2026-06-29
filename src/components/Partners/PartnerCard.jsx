export default function PartnerCard({ name }) {
  return (
    <div
      className="
      h-3/3
      w-3/3
      bg-card 
      border-2 
      border-border 
      rounded-xl 
      p-20 
grid place-items-center
      gap-2 
      hover:border-blue-burrinho 
      hover:scale-105 
      transition-all
mar
      "
    >
      <span className="font-display font-bold text-foreground">{name}</span>
    </div>
  );
}
