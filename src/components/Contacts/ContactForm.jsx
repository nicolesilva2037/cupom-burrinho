export default function ContactForm() {
  return (
    <div className="bg-linear-to-b from-[#eaf5ff] to-[#fefeff]">
      <section id="formulario" className="-mt-10 relative z-10 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-soft">
            <div className="grid lg:grid-cols-[1.7fr_1fr] bg-white">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Envie sua mensagem
                </h2>

                <p className="text-muted-foreground mt-2">
                  Responderemos em até 24 horas úteis
                </p>

                <form className="mt-8 space-y-5">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-2xl border-2 border-border px-5 py-4"
                  />

                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full rounded-2xl border-2 border-border   px-5 py-4"
                  />

                  <select className="w-full rounded-2xl border-2 border-border  px-5 py-4">
                    <option className="">Selecione o motivo do contato</option>
                    <option>🚫 Cupom não funciona</option>
                    <option>🏪 Parceria / Anunciar loja</option>
                    <option>💡 Sugestão</option>
                    <option>🐴 Outro assunto</option>
                  </select>

                  <textarea
                    rows="6"
                    placeholder="Explique sua situação..."
                    className="w-full rounded-2xl border-2 border-border px-5 py-4 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange-400 py-2.5 text-sm font-bold text-primary-foreground"
                  >
                    Enviar para o Burrinho
                  </button>
                </form>
              </div>

              <div
                id="contatos"
                className="border-t lg:border-t-0 lg:border-l border-border p-8 bg-[#ECF5FF]/50"
              >
                <h3 className="mt-5 font-display font-bold text-xl">
                  Atendimento rápido
                </h3>

                <div className="mt-15 space-y-4">
                  <div className="rounded-2xl p-5 border-2 bg-white border-border">
                    <div className="font-bold"> E-mail</div>
                    <div className="text-sm text-muted-foreground">
                      contato@cupomdoburrinho.com.br
                    </div>
                  </div>

                  <div className="rounded-2xl p-5 border-2 bg-white border-border">
                    <div className="font-bold"> WhatsApp</div>
                    <div className="text-sm text-muted-foreground">
                      (11) 99999-9999
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
