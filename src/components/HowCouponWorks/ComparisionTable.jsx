import { FaCheck } from "react-icons/fa6";

const features = [
  {
    name: "Cupons básicos",
    free: true,
    premium: true,
    vip: true,
  },
  {
    name: "Cupons exclusivos",
    free: false,
    premium: true,
    vip: true,
  },
  {
    name: "Resgates ilimitados",
    free: false,
    premium: false,
    vip: true,
  },
  {
    name: "Ofertas antecipadas",
    free: false,
    premium: true,
    vip: true,
  },
  {
    name: "Promoções VIP",
    free: false,
    premium: false,
    vip: true,
  },
  {
    name: "Atendimento prioritário",
    free: false,
    premium: true,
    vip: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Compare os planos
          </h2>
          <p className="text-muted-foreground mt-3">
            Veja o que cada plano oferece e escolha o ideal para você
          </p>
        </div>

        <div className="overflow-x-auto w-full">
          <table className=" w-full min-w-150 border border-border rounded-2xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Benefícios</th>
                <th className="p-4 text-center">Gratuito</th>
                <th className="p-4 text-center text-blue-600 font-bold">
                  Premium
                </th>
                <th className="p-4 text-center">VIP</th>
              </tr>
            </thead>

            <tbody className="w-full">
              {features.map((f) => (
                <tr key={f.name} className="border-t">
                  <td className="p-4 font-medium">{f.name}</td>

                  <td className="p-4 text-center">
                    {f.free ? <FaCheck className="inline-block" /> : "—"}
                  </td>

                  <td className="p-4 text-center text-blue-600 font-semibold">
                    {f.premium ? <FaCheck className="inline-block" /> : "—"}
                  </td>

                  <td className="p-4 text-center">
                    {f.vip ? <FaCheck className="inline-block" /> : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
