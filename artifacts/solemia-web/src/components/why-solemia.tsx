import { motion } from "framer-motion";
import { Search, MonitorSmartphone, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "Primero entendemos. Luego cobramos.",
    description:
      "El diagnóstico es gratuito. En 60 minutos identificamos el cuello de botella, lo cuantificamos en dinero real y te entregamos una propuesta en 48 horas. Si no tiene sentido para tu negocio, no hay propuesta.",
    detail: "Diagnóstico sin costo · Propuesta en 48h",
    gradient: "linear-gradient(135deg, #C32D4B, #961E5A)",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
    title: "Tú ves todo lo que hace el sistema.",
    description:
      "El Panel del Dueño te da visibilidad total: qué hizo el agente hoy, cuántos mensajes atendió, cuántas citas confirmó, qué escaló al humano. Sin depender de nadie para saber si el sistema está funcionando.",
    detail: "Panel en tiempo real · Métricas clave",
    gradient: "linear-gradient(135deg, #961E5A, #671649)",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "La cuota se ajusta a los resultados reales.",
    description:
      "A los 3 meses revisamos los KPIs juntos. Si el sistema generó más valor del esperado, la mensualidad puede subir. Si no llegó al objetivo, baja o se ajusta. Pagás por lo que funciona, no por promesas.",
    detail: "Revisión de KPIs a 3 meses · Sin anualidades",
    gradient: "linear-gradient(135deg, #671649, #4B0F3C)",
  },
];

export function WhySolemia() {
  return (
    <section id="why-solemia" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-5 pointer-events-none"
        style={{ background: "#C32D4B" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#C32D4B" }}>
            Por qué Solemia
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5" style={{ color: "#252525" }}>
            Somos un{" "}
            <span className="text-gradient">aliado real.</span>{" "}
            No solo un proveedor.
          </h2>
          <p className="text-lg" style={{ color: "#6b6b6b" }}>
            Hablamos directo y cumplimos lo que prometemos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl p-8 border transition-all duration-300"
              style={{
                borderColor: "rgba(195,45,75,0.12)",
                boxShadow: "0 2px 16px rgba(37,37,37,0.06)",
              }}
            >
              {/* Top gradient accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: d.gradient }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 shadow-lg"
                style={{ background: d.gradient }}
              >
                {d.icon}
              </div>

              <h3 className="text-xl font-bold mb-4" style={{ color: "#252525" }}>{d.title}</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6b6b6b" }}>{d.description}</p>

              <div
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#C32D4B" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C32D4B" }} />
                {d.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
