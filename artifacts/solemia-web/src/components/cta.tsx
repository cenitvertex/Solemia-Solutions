import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#252525" }}>
      {/* Brand gradient orb */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #C32D4B, #4B0F3C)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "#C32D4B" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-white/80 text-sm font-semibold">Primeros clientes con condiciones especiales</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            ¿Cuánto te está costando tu{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #C32D4B, #961E5A, #e06080)" }}
            >
              cuello de botella
            </span>{" "}
            cada mes?
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            El diagnóstico es gratuito. En 60 minutos entendemos tu negocio, cuantificamos el problema y te mostramos exactamente cómo resolverlo. Sin compromiso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.a
              href="https://wa.me/529991234567?text=Hola,%20me%20interesa%20el%20diagnóstico%20gratuito%20de%20Solemia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white shadow-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #C32D4B, #4B0F3C)",
                boxShadow: "0 12px 40px rgba(195,45,75,0.4)",
              }}
            >
              {/* WhatsApp icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar diagnóstico por WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:hola@solemia.io"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold border border-white/15 text-white/80 hover:border-white/30 hover:text-white transition-all duration-200"
            >
              Escribir al correo
            </motion.a>
          </div>

          {/* Local trust signal */}
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: "#C32D4B" }} />
            <p className="text-white/40 text-sm font-medium">
              Somos de Mérida. Trabajamos en persona, no solo por videollamada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
