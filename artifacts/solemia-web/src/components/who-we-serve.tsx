import { motion } from "framer-motion";

const verticals = [
  {
    name: "Odontología",
    emoji: "🦷",
    pain: "Tu recepcionista no puede atender pacientes y responder WhatsApp al mismo tiempo.",
    stat: "$72,000 MXN/mes en citas perdidas",
    tag: "Clínicas privadas · 1–3 sillones",
  },
  {
    name: "Spa & Belleza",
    emoji: "✨",
    pain: "Tienes las manos ocupadas con un cliente mientras 10 mensajes de Instagram quedan sin respuesta.",
    stat: "40% de prospectos perdidos por respuesta tardía",
    tag: "Spas · Estéticas · Salones",
  },
  {
    name: "Fitness Boutique",
    emoji: "🏋️",
    pain: "Las membresías vencen sin que nadie le dé seguimiento — el cliente se va en silencio.",
    stat: "15–25% de churn evitable con seguimiento a tiempo",
    tag: "Yoga · Pilates · Crossfit · Box",
  },
  {
    name: "Clínicas Médicas",
    emoji: "🩺",
    pain: "Cada cita cancelada sin reagendamiento es un tratamiento completo que no sucedió.",
    stat: "$20,000–$50,000 MXN en tratamientos perdidos",
    tag: "Dermatología · Ginecología · Medicina estética",
  },
  {
    name: "Inmobiliarias",
    emoji: "🏡",
    pain: "Gastas $50,000/mes en leads. El 85% nunca recibe seguimiento real.",
    stat: "60% de ventas vienen de prospectos con 3–6 meses de maduración",
    tag: "Desarrolladoras · Agencias · Asesores",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-5 pointer-events-none"
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
            Industrias
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5" style={{ color: "#252525" }}>
            Para tu industria, un sistema que{" "}
            <span className="text-gradient">la entiende.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6b6b6b" }}>
            No construimos soluciones genéricas. Cada sistema nace de entender el cuello de botella específico de tu negocio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(195,45,75,0.12)" }}
              className="group relative bg-white rounded-2xl p-7 border transition-all duration-300 cursor-default"
              style={{
                borderColor: "rgba(195,45,75,0.12)",
                boxShadow: "0 2px 12px rgba(37,37,37,0.06)",
                /* Center the 5th card when in 3-col layout */
                ...(i === 4 ? { gridColumn: "2 / 3" } : {}),
              }}
            >
              {/* Hover gradient top border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #C32D4B, #4B0F3C)" }}
              />

              <div className="text-3xl mb-4">{v.emoji}</div>

              <h3 className="text-xl font-bold mb-2" style={{ color: "#252525" }}>{v.name}</h3>

              <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6b6b6b" }}>{v.pain}</p>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold mb-4"
                style={{ background: "rgba(195,45,75,0.07)", color: "#C32D4B" }}
              >
                {v.stat}
              </div>

              <p className="text-xs font-medium" style={{ color: "#9b9b9b" }}>{v.tag}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
