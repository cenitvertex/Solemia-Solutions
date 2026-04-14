import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Video, MapPin, ChevronLeft, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormStep = "intro" | "a" | "b" | "c" | "calendar";

interface QData {
  nombreNegocio: string;
  nombreResponde: string;
  puesto: string;
  giro: string;
  giroOtro: string;
  equipo: string;
  clientes: string;
  rA: number;
  rB: number;
  rC: number;
  rD: number;
  rE: number;
  escalabilidad: number;
  problemas: string[];
  problemasOtro: string;
}

const initial: QData = {
  nombreNegocio: "", nombreResponde: "", puesto: "",
  giro: "", giroOtro: "", equipo: "", clientes: "",
  rA: 0, rB: 0, rC: 0, rD: 0, rE: 0,
  escalabilidad: 0, problemas: [], problemasOtro: "",
};

// ─── Atoms ────────────────────────────────────────────────────────────────────

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ fontFamily: "inherit", borderColor: "#e5e7eb", color: "#252525" }}
      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors"
      onFocus={e => (e.currentTarget.style.borderColor = "#C32D4B")}
      onBlur={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
    />
  );
}

function RadioOpt({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer" onClick={onChange}>
      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
        style={{ borderColor: checked ? "#C32D4B" : "#d1d5db" }}>
        {checked && <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#C32D4B" }} />}
      </div>
      <span className="text-sm" style={{ color: "#252525" }}>{label}</span>
    </label>
  );
}

function CheckOpt({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer" onClick={onChange}>
      <div className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all"
        style={{ borderColor: checked ? "#C32D4B" : "#d1d5db", background: checked ? "#C32D4B" : "transparent" }}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className="text-sm" style={{ color: "#252525" }}>{label}</span>
    </label>
  );
}

function Rating({ value, onChange, left, right }: { value: number; onChange: (v: number) => void; left: string; right: string }) {
  return (
    <div>
      <div className="flex gap-2 mb-1.5">
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} type="button" onClick={() => onChange(n)}
            className="w-9 h-9 rounded-full border-2 text-sm font-bold transition-all duration-150 flex items-center justify-center"
            style={value === n
              ? { background: "linear-gradient(135deg, #C32D4B, #4B0F3C)", borderColor: "transparent", color: "#fff" }
              : { borderColor: "#e5e7eb", color: "#9b9b9b" }}>
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-xs" style={{ color: "#9b9b9b" }}>
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold mb-2" style={{ color: "#252525" }}>{children}</p>;
}

// ─── EmailJS send ─────────────────────────────────────────────────────────────

function sendFormEmail(d: QData) {
  emailjs.send(
    "service_kw9prcs",
    "template_2liyh6x",
    {
      nombreNegocio:  d.nombreNegocio,
      nombreResponde: d.nombreResponde,
      puesto:         d.puesto,
      giro:           d.giro === "otro" ? d.giroOtro : d.giro,
      equipo:         d.equipo,
      clientes:       d.clientes,
      rA:             d.rA,
      rB:             d.rB,
      rC:             d.rC,
      rD:             d.rD,
      rE:             d.rE,
      escalabilidad:  d.escalabilidad,
      problemas:      [
        ...d.problemas.filter(p => p !== "otro"),
        ...(d.problemas.includes("otro") && d.problemasOtro ? [d.problemasOtro] : []),
      ].join(", "),
    },
    "xaS98tzhaYF8KYWdv",
  ).catch(err => console.error("EmailJS error:", err));
}

// ─── Cal.com inline embed ─────────────────────────────────────────────────────

function CalComEmbed({ data }: { data: QData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current || !containerRef.current) return;
    didInit.current = true;

    // Official Cal.com embed IIFE — queues commands before the script loads
    const win = window as any;
    if (!win.Cal) {
      (function (C: any, A: string, L: string) {
        const p = (a: any, ar: any) => { a.q.push(ar); };
        C.Cal = function (...args: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns  = {};
            cal.q   = cal.q || [];
            const s = document.createElement("script") as HTMLScriptElement;
            s.src   = A;
            s.async = true;
            document.head.appendChild(s);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api: any = (...a: any[]) => p(api, a);
            api.q = api.q || [];
            const ns = args[1];
            if (typeof ns === "string") { (cal.ns[ns] = api) && p(api, args); return; }
            p(cal, args);
            return;
          }
          p(cal, args);
        };
      })(win, "https://app.cal.com/embed/embed.js", "init");
    }

    win.Cal("init", { origin: "https://app.cal.com" });
    win.Cal("inline", {
      elementOrSelector: containerRef.current,
      calLink: "solemia-s7l5nq/diagnostico-solemia",
      config: {
        name:   data.nombreResponde,
        layout: "month_view",
        theme:  "light",
      },
    });
    win.Cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <div ref={containerRef} style={{ minWidth: "320px", height: "900px", width: "100%" }} />
  );
}

// ─── Form wrapper ─────────────────────────────────────────────────────────────

const STEP_NAMES = ["Sobre tu negocio", "Tu operación", "Capacidad"];

function FormWrapper({ title, progress, onBack, onNext, canNext, nextLabel = "Continuar", children }: {
  title: string; progress: number; onBack: () => void; onNext: () => void;
  canNext: boolean; nextLabel?: string; children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="p-1.5 rounded-lg transition-colors hover:bg-white/10 flex-shrink-0"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex flex-1 items-center gap-2">
          {STEP_NAMES.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ background: i <= progress ? "#C32D4B" : "rgba(255,255,255,0.2)" }} />
                <span className="text-xs font-semibold hidden sm:block transition-colors duration-300"
                  style={{ color: i === progress ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)" }}>
                  {s}
                </span>
              </div>
              {i < 2 && <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />}
            </div>
          ))}
        </div>
        <span className="text-xs font-semibold flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>
          {progress + 1}/3
        </span>
      </div>

      {/* Card */}
      <div className="rounded-2xl p-7 overflow-y-auto" style={{ background: "#fff", maxHeight: "68vh" }}>
        <h3 className="text-xl font-bold mb-5" style={{ color: "#252525" }}>{title}</h3>
        <div className="space-y-6">{children}</div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-end">
        <motion.button onClick={onNext} disabled={!canNext}
          whileHover={canNext ? { scale: 1.02 } : {}} whileTap={canNext ? { scale: 0.98 } : {}}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white"
          style={{
            background: "linear-gradient(135deg, #C32D4B, #4B0F3C)",
            opacity: canNext ? 1 : 0.35,
            cursor: canNext ? "pointer" : "not-allowed",
            boxShadow: canNext ? "0 6px 24px rgba(195,45,75,0.3)" : "none",
          }}>
          {nextLabel}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

// ─── Main CTA ─────────────────────────────────────────────────────────────────

export function CTA() {
  const [step, setStep] = useState<FormStep>("intro");
  const [data, setData] = useState<QData>(initial);

  const set = (key: keyof QData, val: any) => setData(d => ({ ...d, [key]: val }));
  const toggleProblema = (val: string) =>
    set("problemas", data.problemas.includes(val) ? data.problemas.filter(p => p !== val) : [...data.problemas, val]);

  const canA = !!(data.giro && data.equipo && data.clientes);
  const canB = !!(data.rA && data.rB && data.rC && data.rD && data.rE);
  const canC = !!(data.escalabilidad && data.problemas.length > 0);

  const slideIn = { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -24 }, transition: { duration: 0.3 } };
  const fadeUp  = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -16 }, transition: { duration: 0.35 } };

  return (
    <section id="contacto" className="pt-16 pb-20 relative overflow-hidden" style={{ background: "#252525" }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #C32D4B, #4B0F3C)" }} />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[100px] opacity-8 pointer-events-none"
        style={{ background: "#C32D4B" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">

          {/* ── INTRO ── */}
          {step === "intro" && (
            <motion.div key="intro" {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Agenda ahora</span>
                </div>
                <h2 className="font-bold text-white leading-[1.1] mb-6" style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}>
                  ¿Cuál es el proceso que más te cuesta?
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  En 30 minutos lo identificamos juntos.
                </p>
                <div className="space-y-3">
                  {[
                    { Icon: Video, text: "Diagnósticos de manera remota (Google Meet)" },
                    { Icon: MapPin, text: "Diagnósticos de manera personal en Mérida, Yuc." },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(195,45,75,0.2)" }}>
                        <Icon className="w-4 h-4" style={{ color: "#C32D4B" }} />
                      </div>
                      <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-white font-bold text-xl mb-3">Empieza con el cuestionario</p>
                <p className="text-sm mb-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Toma ~5 minutos y nos ayuda a llegar a tu sesión con mejor contexto. Sin respuestas correctas ni incorrectas.
                </p>
                <p className="text-xs font-semibold mb-8" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Al terminar, podrás elegir fecha y hora de tu diagnóstico.
                </p>
                <motion.button onClick={() => setStep("a")}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #C32D4B, #4B0F3C)", boxShadow: "0 8px 30px rgba(195,45,75,0.3)" }}>
                  Iniciar cuestionario
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <p className="text-center text-xs mt-3" style={{ color: "rgba(255,255,255,0.2)" }}>Sin costo · Sin compromiso</p>
              </div>
            </motion.div>
          )}

          {/* ── A: SOBRE TU NEGOCIO ── */}
          {step === "a" && (
            <motion.div key="a" {...slideIn}>
              <FormWrapper title="Sobre tu negocio" progress={0} onBack={() => setStep("intro")} onNext={() => setStep("b")} canNext={canA}>
                {/* Header */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 mb-2 border-b" style={{ borderColor: "#f0eaec" }}>
                  <div><FieldLabel>Nombre del negocio</FieldLabel>
                    <TextInput value={data.nombreNegocio} onChange={v => set("nombreNegocio", v)} placeholder="Ej. Clínica Dental García" /></div>
                  <div><FieldLabel>Tu nombre</FieldLabel>
                    <TextInput value={data.nombreResponde} onChange={v => set("nombreResponde", v)} placeholder="Nombre completo" /></div>
                  <div><FieldLabel>Puesto / Rol</FieldLabel>
                    <TextInput value={data.puesto} onChange={v => set("puesto", v)} placeholder="Ej. Dueño, Director, Gerente" /></div>
                </div>

                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#C32D4B" }}>A. Tu negocio hoy</p>

                <div>
                  <FieldLabel>¿A qué se dedica tu negocio?</FieldLabel>
                  {[
                    "Venta de productos (tienda, comercio, distribución)",
                    "Servicios profesionales (consultoría, contabilidad, legal, etc.)",
                    "Servicios de salud (consultorio, clínica, laboratorio)",
                    "Alimentos y bebidas (restaurante, café, catering)",
                    "Educación o capacitación",
                  ].map(opt => <RadioOpt key={opt} label={opt} checked={data.giro === opt} onChange={() => set("giro", opt)} />)}
                  <div className="flex items-center gap-3 py-1.5">
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 cursor-pointer transition-all"
                      style={{ borderColor: data.giro === "otro" ? "#C32D4B" : "#d1d5db" }}
                      onClick={() => set("giro", "otro")}>
                      {data.giro === "otro" && <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#C32D4B" }} />}
                    </div>
                    <span className="text-sm flex-shrink-0" style={{ color: "#252525" }}>Otro:</span>
                    <input type="text" value={data.giroOtro}
                      onChange={e => { set("giroOtro", e.target.value); set("giro", "otro"); }}
                      className="flex-1 px-3 py-1.5 rounded border text-sm outline-none"
                      style={{ borderColor: "#e5e7eb", fontFamily: "inherit", color: "#252525" }}
                      placeholder="Describe tu giro" />
                  </div>
                </div>

                <div>
                  <FieldLabel>¿Cuántas personas trabajan en tu negocio?</FieldLabel>
                  {["1–3 personas", "4–10 personas", "11–25 personas", "Más de 25 personas"].map(opt =>
                    <RadioOpt key={opt} label={opt} checked={data.equipo === opt} onChange={() => set("equipo", opt)} />)}
                </div>

                <div>
                  <FieldLabel>¿Cuántos clientes atienden aproximadamente al mes?</FieldLabel>
                  {["Menos de 50", "50–150", "150–500", "Más de 500"].map(opt =>
                    <RadioOpt key={opt} label={opt} checked={data.clientes === opt} onChange={() => set("clientes", opt)} />)}
                </div>
              </FormWrapper>
            </motion.div>
          )}

          {/* ── B: OPERACIÓN DIARIA ── */}
          {step === "b" && (
            <motion.div key="b" {...slideIn}>
              <FormWrapper title="Cómo trabajan día a día" progress={1} onBack={() => setStep("a")} onNext={() => setStep("c")} canNext={canB}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C32D4B" }}>B. Operación diaria</p>
                <p className="text-sm mb-6" style={{ color: "#6b6b6b" }}>
                  En cada actividad, marca qué tanto se hace de forma manual vs. con herramienta digital.
                </p>
                <div className="space-y-7">
                  {([
                    ["Atención a clientes (responder preguntas, dar información, agendar)", "rA"],
                    ["Registro de ventas, pedidos o citas", "rB"],
                    ["Comunicación interna (coordinación entre equipo)", "rC"],
                    ["Seguimiento a clientes después de la venta o servicio", "rD"],
                    ["Manejo de documentos, reportes o inventarios", "rE"],
                  ] as [string, keyof QData][]).map(([label, key]) => (
                    <div key={key as string}>
                      <FieldLabel>{label}</FieldLabel>
                      <Rating value={data[key] as number} onChange={v => set(key, v)} left="Todo manual" right="Todo digital" />
                    </div>
                  ))}
                </div>
              </FormWrapper>
            </motion.div>
          )}

          {/* ── C: CAPACIDAD ── */}
          {step === "c" && (
            <motion.div key="c" {...slideIn}>
              <FormWrapper title="Tu operación a fondo" progress={2} onBack={() => setStep("b")} onNext={() => { sendFormEmail(data); setStep("calendar"); }} canNext={canC} nextLabel="Ver disponibilidad">
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#C32D4B" }}>C. Capacidad y cuellos de botella</p>

                <div>
                  <FieldLabel>Si mañana te llegaran el triple de clientes, ¿qué tan preparado está tu negocio para atenderlos sin contratar a nadie más?</FieldLabel>
                  <div className="mt-3">
                    <Rating value={data.escalabilidad} onChange={v => set("escalabilidad", v)} left="Imposible" right="Sin problema" />
                  </div>
                </div>

                <div>
                  <FieldLabel>¿Qué áreas de tu negocio serían las primeras en tener problemas?</FieldLabel>
                  <p className="text-xs mb-2" style={{ color: "#9b9b9b" }}>Puedes marcar más de una.</p>
                  {[
                    "Cotizaciones / precios",
                    "Atención al cliente",
                    "Producción / entrega del servicio",
                    "Cobros y facturación",
                    "Coordinación del equipo",
                    "Seguimiento a clientes",
                    "Inventario / insumos",
                  ].map(opt => <CheckOpt key={opt} label={opt} checked={data.problemas.includes(opt)} onChange={() => toggleProblema(opt)} />)}
                  <div className="flex items-center gap-3 py-1.5">
                    <div className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 cursor-pointer transition-all"
                      style={{ borderColor: data.problemas.includes("otro") ? "#C32D4B" : "#d1d5db", background: data.problemas.includes("otro") ? "#C32D4B" : "transparent" }}
                      onClick={() => toggleProblema("otro")}>
                      {data.problemas.includes("otro") && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm flex-shrink-0" style={{ color: "#252525" }}>Otro:</span>
                    <input type="text" value={data.problemasOtro}
                      onChange={e => { set("problemasOtro", e.target.value); if (!data.problemas.includes("otro")) toggleProblema("otro"); }}
                      className="flex-1 px-3 py-1.5 rounded border text-sm outline-none"
                      style={{ borderColor: "#e5e7eb", fontFamily: "inherit", color: "#252525" }}
                      placeholder="Describe el área" />
                  </div>
                </div>
              </FormWrapper>
            </motion.div>
          )}

          {/* ── CALENDAR ── */}
          {step === "calendar" && (
            <motion.div key="calendar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <div className="max-w-3xl mx-auto">
                <button onClick={() => setStep("c")} className="flex items-center gap-1.5 text-sm font-semibold mb-6 hover:opacity-70 transition-opacity"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  <ChevronLeft className="w-4 h-4" /> Volver
                </button>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
                    style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Cuestionario completado</span>
                  </div>
                  <h3 className="font-bold text-white text-2xl mb-1">Elige fecha y hora para tu diagnóstico</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>30 minutos · Remoto (Google Meet) o presencial en Mérida</p>
                </div>
                <div className="rounded-2xl overflow-hidden" style={{ background: "#fff" }}>
                  <CalComEmbed data={data} />
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
