import { motion } from "framer-motion";
import { Bot, FileText, Plug, LayoutDashboard } from "lucide-react";

const components = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "El Agente",
    description:
      "Ejecuta el proceso de forma autónoma, 24/7. Responde mensajes, confirma citas, hace seguimiento — sin intervención manual.",
    color: "#C32D4B",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Las Reglas",
    description:
      "Define qué hace el agente, qué no hace, y qué escala al humano. Diseñado contigo antes de construir.",
    color: "#961E5A",
  },
  {
    icon: <Plug className="w-6 h-6" />,
    title: "Las Herramientas",
    description:
      "WhatsApp, agendas, CRMs y más — conectados al agente para que opere en los canales donde ya está tu negocio.",
    color: "#671649",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "El Panel",
    description:
      "Tú ves todo lo que hace el sistema en tiempo real: métricas, conversaciones, alertas. Sin depender de nadie para entender qué pasa.",
    color: "#4B0F3C",
  },
];

const phases = [
  { num: "01", title: "Diagnóstico", time: "1 semana", desc: "Sesión de 60 min para mapear tu operación e identificar el cuello de botella más costoso.", free: true },
  { num: "02", title: "Diseño", time: "1 semana", desc: "Definimos qué hace el agente, qué no hace, y cómo se ve tu panel. Tú apruebas antes de construir." },
  { num: "03", title: "Construcción", time: "2 semanas", desc: "Construimos el sistema, integramos las herramientas y hacemos pruebas. Demo en el día 10." },
  { num: "04", title: "Implementación", time: "1 semana", desc: "El sistema entra en producción. Capacitación de 60 min máximo. Soporte intensivo las primeras 2 semanas." },
  { num: "05", title: "Operación continua", time: "Mensual", desc: "Monitoreo semanal, reporte mensual, sesión de revisión de KPIs y ajustes técnicos." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Solutions() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden" style={{ background: "#F9F6F8" }}>
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[130px] opacity-10 pointer-events-none"
        style={{ background: "#4B0F3C" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#C32D4B" }}>
            Cómo funciona
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5" style={{ color: "#252525" }}>
            Un sistema hecho de{" "}
            <span className="text-gradient">cuatro piezas.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6b6b6b" }}>
            Cada sistema Solemia tiene la misma arquitectura. Lo que cambia es lo que hace — diseñado para el problema específico de tu negocio.
          </p>
        </motion.div>

        {/* 4 Components */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {components.map((c, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border transition-all duration-300"
              style={{
                borderColor: "rgba(195,45,75,0.1)",
                boxShadow: "0 2px 12px rgba(37,37,37,0.05)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-5"
                style={{ background: c.color }}
              >
                {c.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#252525" }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>{c.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px" style={{ background: "rgba(195,45,75,0.15)" }} />
          <p className="text-sm font-bold tracking-widest uppercase" style={{ color: "#C32D4B" }}>Del diagnóstico a la operación</p>
          <div className="flex-1 h-px" style={{ background: "rgba(195,45,75,0.15)" }} />
        </div>

        {/* 5-Phase Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < phases.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 left-[calc(100%)] w-full h-px z-0"
                  style={{ background: "linear-gradient(90deg, rgba(195,45,75,0.3), transparent)" }}
                />
              )}

              <div
                className="relative z-10 bg-white rounded-2xl p-5 border h-full"
                style={{
                  borderColor: "rgba(195,45,75,0.1)",
                  boxShadow: "0 2px 10px rgba(37,37,37,0.05)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-2xl font-bold"
                    style={{ background: "linear-gradient(135deg, #C32D4B, #4B0F3C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {p.num}
                  </span>
                  {p.free && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: "#C32D4B" }}
                    >
                      Gratis
                    </span>
                  )}
                </div>
                <h4 className="font-bold mb-1" style={{ color: "#252525" }}>{p.title}</h4>
                <p className="text-xs font-semibold mb-2" style={{ color: "#C32D4B" }}>{p.time}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b6b6b" }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
