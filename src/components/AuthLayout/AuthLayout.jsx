import MenuLogin from "../MenuLogin/MenuLogin";
import Footer from "../Footer/Footer";

export default function AuthLayout({
  current,
  badge,
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans from-[#fefeff] to-[#eaf5ff] text-foreground">
      <MenuLogin current={current} />

      <main className="flex-1 flex items-center justify-center px-4 py-14 bg-linear-to-b from-[#fefeff] to-[#eaf5ff] -mt-17">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="mt-4 text-3xl md:text-4xl font-display font-bold text-foreground">
              {title}
            </h1>

            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          </div>

          <div className="bg-card rounded-3xl border-2 border-border shadow-soft p-7 md:p-8">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
