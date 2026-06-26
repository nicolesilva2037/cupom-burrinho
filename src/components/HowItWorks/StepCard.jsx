export default function StepCard({ number, title, description }) {
  return (
    <div className="bg-card rounded-2xl p-7 border-2 border-border text-center">

      <div className="w-14 h-14 mx-auto rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex items-center justify-center shadow-soft">
        {number}
      </div>

      <h3 className="mt-4 font-display font-bold text-xl tracking-[-0.01em]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>

    </div>
  );
}