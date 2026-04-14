import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Diagnóstico y honestidad.",
    description:
      "Antes de hablar de una solución, entendemos tu negocio y su operación. Si lo que tienes no necesita IA, te lo decimos.",
  },
  {
    num: "02",
    title: "Funcionalidad total.",
    description:
      "Construimos exactamente lo que resuelve tu problema, buscando siempre la funcionalidad, NO lo más llamativo.",
  },
  {
    num: "03",
    title: "Consistencia, no promesas.",
    description:
      "El sistema ejecuta el proceso igual cada vez. Sin días malos, sin olvidos, sin variaciones. El trabajo sale bien siempre.",
  },
];

export function WhySolemia() {
  return (
    <section id="por-que-solemia" className="pt-16 pb-20 relative overflow-hidden bg-white">
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-[120px] opacity-5 pointer-events-none"
        style={{ background: "#C32D4B" }}
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
            Por qué Solemia
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", color: "#252525" }}>
            No vendemos tecnología.
          </h2>
          <p className="text-xl font-medium" style={{ color: "#6b6b6b" }}>
            Resolvemos con IA los problemas que más te cuestan.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative"
            >
              <div
                className="bg-white rounded-2xl p-8 border h-full transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden"
                style={{
                  borderColor: "rgba(195,45,75,0.1)",
                  boxShadow: "0 2px 16px rgba(37,37,37,0.05)",
                }}
              >
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
                  {r.num}
                </span>

                <h3 className="text-xl font-bold mb-4" style={{ color: "#252525" }}>{r.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#6b6b6b" }}>{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
