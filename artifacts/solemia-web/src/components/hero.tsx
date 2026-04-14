import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCheck } from "lucide-react";

const chatMessages = [
  { id: 1, from: "client", avatar: "M", name: "María L.", text: "Hola, ¿tienen cita disponible mañana?", time: "14:22" },
  { id: 2, from: "agent", text: "¡Hola María! Sí, tenemos a las 10:00am y 3:00pm. ¿Cuál te funciona mejor? 😊", time: "14:22" },
  { id: 3, from: "client", avatar: "M", name: "María L.", text: "Las 10am perfecta 👍", time: "14:23" },
  { id: 4, from: "agent", text: "Listo, cita confirmada mañana 10:00am. Te envío recordatorio antes ✅", time: "14:23" },
];

const metrics = [
  { label: "Citas hoy", value: "18", color: "#C32D4B" },
  { label: "Confirmadas", value: "16", color: "#961E5A" },
  { label: "No-shows evitados", value: "3", color: "#4B0F3C" },
];

function PanelMockup() {
  return (
    <div className="relative w-full max-w-md ml-auto">
      {/* Glow behind card */}
      <div
        className="absolute -inset-6 rounded-3xl blur-2xl opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #C32D4B, #4B0F3C)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ border: "1px solid rgba(195,45,75,0.15)" }}
      >
        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #C32D4B 0%, #4B0F3C 100%)" }} className="px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">Panel del Dueño</p>
              <p className="text-white font-bold text-sm">Dental García · Mérida</p>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <span className="text-white/90 text-xs font-semibold">Agente activo</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="py-3 px-2 text-center"
            >
              <p className="text-xl font-bold" style={{ color: m.color }}>{m.value}</p>
              <p className="text-xs text-gray-400 leading-tight mt-0.5">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chat */}
        <div className="p-4 space-y-3" style={{ background: "#F9F6F8" }}>
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            />
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">WhatsApp Business · En vivo</p>
          </div>

          {chatMessages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1 + i * 1.1, duration: 0.35, ease: "easeOut" }}
            >
              {msg.from === "client" ? (
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                    {msg.avatar}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{msg.name}</p>
                    <div className="bg-white rounded-2xl rounded-bl-none px-3 py-2 shadow-sm inline-block">
                      <p className="text-sm text-gray-700">{msg.text}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end">
                  <div
                    className="rounded-2xl rounded-br-none px-3 py-2 shadow-sm max-w-[230px]"
                    style={{ background: "linear-gradient(135deg, #C32D4B, #961E5A)" }}
                  >
                    <p className="text-xs text-white/60 font-semibold mb-1">Agente Solemia</p>
                    <p className="text-sm text-white leading-snug">{msg.text}</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-xs text-white/40">{msg.time}</span>
                      <CheckCheck className="w-3 h-3 text-white/40" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: "#F9F6F8" }}>
      {/* Ambient gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: "#C32D4B" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-15"
        style={{ background: "#4B0F3C" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">

          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
              style={{ borderColor: "rgba(195,45,75,0.25)", background: "rgba(195,45,75,0.06)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C32D4B" }} />
              <span className="text-sm font-semibold" style={{ color: "#252525" }}>Sistemas Agénticos de IA · Mérida</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6" style={{ color: "#252525" }}>
              Sistemas de IA que resuelven los{" "}
              <span className="text-gradient">cuellos de botella</span>{" "}
              de tu negocio.
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "#6b6b6b" }}>
              Los negocios no necesitan más tecnología — necesitan tecnología que funcione para ellos. Cada sistema que construimos está diseñado para tu industria específica. Sin ruido, sin fricciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-shadow duration-200"
                style={{
                  background: "linear-gradient(135deg, #C32D4B, #4B0F3C)",
                  boxShadow: "0 8px 30px rgba(195,45,75,0.3)",
                }}
              >
                Agenda tu diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              <motion.a
                href="#solutions"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-white border transition-all duration-200"
                style={{ color: "#252525", borderColor: "rgba(37,37,37,0.15)" }}
              >
                Ver cómo funciona
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8"
            >
              {["Diagnóstico gratuito", "Propuesta en 48h", "Sin permanencia"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C32D4B" }} />
                  <span className="text-sm font-medium" style={{ color: "#6b6b6b" }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Animated Panel */}
          <div className="hidden lg:block">
            <PanelMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
