import { useNavigate } from "react-router-dom";

export default function ContactNotice() {
  const navigate = useNavigate();

  return (
    <div className="mt-6 rounded-2xl border-2 border-dashed border-border bg-accent/30 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        CPF ou nome errado? Entre em contato conosco para alterá-los.
      </p>

      <button
        type="button"
        onClick={() => navigate("/contact")}
        className="shrink-0 rounded-full border-2 border-border px-5 py-2 text-sm font-bold text-foreground hover:bg-background transition-colors"
      >
        Fale Conosco
      </button>
    </div>
  );
}
