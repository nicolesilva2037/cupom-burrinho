export default function FooterCopyright() {
  return (
    <div className="mt-10 pt-6 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Clube do Burrinho. Todos os direitos
          reservados.
        </p>

        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>
  );
}
