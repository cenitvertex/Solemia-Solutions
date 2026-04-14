import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const painPoints = [
  "Cada mensaje sin respuesta es un cliente que no regresa.",
  "Cada seguimiento olvidado es una venta que no cerró.",
  "Cada proceso manual es un error esperando suceder.",
];

const processes = [
  "Atención a clientes",
  "Cotizaciones",
  "Seguimiento",
  "Reportes",
  "Confirmaciones",
  "Documentación",
  "Procesamiento",
  "Análisis",
];

const loopItems = [...processes, ...processes, ...processes];

const pillColors = [
  { color: "#C32D4B", border: "rgba(195,45,75,0.3)", bg: "rgba(195,45,75,0.08)" },
  { color: "#961E5A", border: "rgba(150,30,90,0.3)", bg: "rgba(150,30,90,0.08)" },
  { color: "#b8325a", border: "rgba(184,50,90,0.3)", bg: "rgba(184,50,90,0.07)" },
  { color: "#C32D4B", border: "rgba(195,45,75,0.3)", bg: "rgba(195,45,75,0.08)" },
  { color: "#961E5A", border: "rgba(150,30,90,0.3)", bg: "rgba(150,30,90,0.08)" },
  { color: "#4B0F3C", border: "rgba(75,15,60,0.35)", bg: "rgba(75,15,60,0.07)" },
  { color: "#dd6b8a", border: "rgba(221,107,138,0.3)", bg: "rgba(221,107,138,0.07)" },
  { color: "#b8325a", border: "rgba(184,50,90,0.3)", bg: "rgba(184,50,90,0.07)" },
];

function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    const speed = 0.6;
    let raf: number;
    const totalWidth = processes.length * 180;
    function step() {
      x -= speed;
      if (Math.abs(x) >= totalWidth) x = 0;
      if (track) track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
    >
      <div ref={trackRef} className="flex gap-3 w-max" style={{ willChange: "transform" }}>
        {loopItems.map((p, i) => {
          const c = pillColors[i % processes.length];
          return (
            <div
              key={i}
              className="flex-shrink-0 px-5 py-3 rounded-full border text-sm font-semibold whitespace-nowrap"
              style={{ color: c.color, borderColor: c.border, background: c.bg }}
            >
              {p}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <>
      {/* BLOQUE 1 — Fondo oscuro */}
      <section className="relative overflow-hidden" style={{ background: "#1a1a1a" }}>
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[130px] pointer-events-none opacity-10"
          style={{ background: "#C32D4B" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-medium mb-12 leading-relaxed max-w-2xl"
            style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "rgba(255,255,255,0.5)" }}
          >
            Hay acciones y tareas en tu negocio que consumen tiempo, generan gastos y errores.
          </motion.p>

          <div className="space-y-6">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex items-start gap-5"
              >
                <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: "#C32D4B", fontSize: "22px" }}>
                  →
                </span>
                <p className="text-lg font-semibold leading-snug" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 2 — Fondo blanco */}
      <section className="relative overflow-hidden bg-white pt-14 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center font-bold"
            style={{ fontSize: "clamp(24px, 2.8vw, 36px)", color: "#252525" }}
          >
            Procesos que tu negocio repite todos los días
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Carousel />
        </motion.div>
      </section>
    </>
  );
}
