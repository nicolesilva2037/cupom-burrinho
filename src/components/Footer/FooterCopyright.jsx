export default function FooterCopyright() {
  return (
    <div className="mt-6 pt-4 border-t border-border">
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Clube do Burrinho. Todos os direitos
        reservados.
      </p>
    </div>
  );
}
