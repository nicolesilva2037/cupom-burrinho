export default function HeroBackground({ render }) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${
            render.x * 50 + 50
          }% ${render.y * 50 + 50}%, rgba(59,130,246,0.18), transparent 45%)`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-300/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-52 h-52 rounded-full bg-sky-200/30 blur-3xl animate-[floatSoft_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl animate-[floatSoft_10s_ease-in-out_infinite]" />
      </div>
    </>
  );
}
