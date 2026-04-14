import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    subtitle: "Mapeamos tu operación.",
    description:
      "En 30 minutos identificamos el o los procesos que más te cuestan en tiempo o en dinero. Si lo que tienes no necesita IA, te lo decimos.",
  },
  {
    num: "02",
    title: "Construcción",
    subtitle: "Diseñamos el sistema contigo.",
    description:
      "Tú apruebas qué hace el agente, qué no hace, y cuándo escala a un humano. No construimos nada que no hayas validado primero.",
  },
  {
    num: "03",
    title: "Operación",
    subtitle: "El sistema corre. Tú supervisas.",
    description:
      "Nosotros lo monitoreamos, ajustamos y nos aseguramos de que todo corra bien.",
  },
];

export function Solutions() {
  return (
    <section id="como-funciona" className="pt-16 pb-20 relative overflow-hidden" style={{ background: "#F9F6F8" }}>
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-8 pointer-events-none"
        style={{ background: "#4B0F3C" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#C32D4B" }}>
            Cómo funciona
          </p>
          <h2 className="font-bold" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", color: "#252525" }}>
            Tres pasos.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative group"
            >
              {/* Connector (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px z-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, rgba(195,45,75,0.25), transparent)" }}
                />
              )}

              <div
                className="relative z-10 bg-white rounded-2xl p-8 border h-full transition-all duration-300 group-hover:-translate-y-1"
                style={{
                  borderColor: "rgba(195,45,75,0.1)",
                  boxShadow: "0 2px 16px rgba(37,37,37,0.05)",
                }}
              >
                {/* Top accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #C32D4B, #4B0F3C)" }}
                />

                <span
                  className="block text-4xl font-bold mb-6"
                  style={{
                    background: "linear-gradient(135deg, #C32D4B, #4B0F3C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.num}
                </span>

                <h3 className="text-xl font-bold mb-1" style={{ color: "#252525" }}>{step.title}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: "#C32D4B" }}>{step.subtitle}</p>
                <p className="text-base leading-relaxed" style={{ color: "#6b6b6b" }}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
