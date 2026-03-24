import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 bg-solemia-charcoal z-0" />
      <div className="absolute inset-0 bg-gradient-brand opacity-20 z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Únete a las empresas que ya usan las soluciones de IA de Solemia para impulsar su eficiencia, crecimiento y claridad operativa.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo de trabajo"
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-solemia-coral backdrop-blur-sm transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-solemia-coral text-white font-bold hover:bg-solemia-coral/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-solemia-coral/30 hover:shadow-xl"
              >
                {submitted ? (
                  <>Enviado <Send className="w-5 h-5" /></>
                ) : (
                  <>Comenzar <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </div>
            {submitted && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-0 right-0 text-sm text-green-400 font-medium"
              >
                ¡Gracias! Nos pondremos en contacto contigo pronto.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
