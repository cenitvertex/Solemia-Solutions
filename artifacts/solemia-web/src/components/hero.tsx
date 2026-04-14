import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex items-center pt-20 overflow-hidden" style={{ background: "#F9F6F8" }}>
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-15" style={{ background: "#C32D4B" }} />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-10" style={{ background: "#4B0F3C" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex justify-center pt-16 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-2xl text-center"
          >
            <h1 className="font-bold leading-[1.1] mb-6" style={{ fontSize: "clamp(38px, 4.5vw, 58px)", color: "#252525" }}>
              Tu negocio tiene procesos que{" "}
              <span className="text-gradient">deberían operar solos.</span>
            </h1>

            <p className="text-lg mb-3 font-semibold" style={{ color: "#252525" }}>
              Solemia los identifica y construye el sistema que los resuelve.
            </p>
            <p className="text-lg mb-10" style={{ color: "#6b6b6b", lineHeight: 1.7 }}>
              La IA ejecuta. Tú supervisas. El negocio no para.
            </p>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white mb-5"
              style={{
                background: "linear-gradient(135deg, #C32D4B, #4B0F3C)",
                boxShadow: "0 8px 30px rgba(195,45,75,0.28)",
              }}
            >
              Agenda tu diagnóstico gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-3"
            >
              {["30 minutos", "Sin costo"].map((item) => (
                <span
                  key={item}
                  className="text-xs font-semibold px-4 py-1.5 rounded-full border"
                  style={{ color: "#C32D4B", borderColor: "rgba(195,45,75,0.3)", background: "rgba(195,45,75,0.06)" }}
                >
                  {item}
                </span>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
