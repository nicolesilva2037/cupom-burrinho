import burrinho from "../../assets/images/burrinho-mascot.png";

export default function ProfileAvatar({ nome, email }) {
  return (
    <div className="mt-8 flex items-center gap-4">
      <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center shadow-soft overflow-hidden">
        <img src={burrinho} alt="" className="h-12 w-12" />
      </div>
      <div>
        <p className="font-display font-bold text-lg text-foreground">{nome}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  );
}
