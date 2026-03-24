import { motion } from "framer-motion";
import { Store, Building, Building2, Lightbulb } from "lucide-react";

export function WhoWeServe() {
  const targets = [
    {
      title: "Microempresas",
      description: "Automatiza las tareas repetitivas para que puedas enfocarte en tu negocio, no en la administración.",
      icon: <Store className="w-8 h-8 text-solemia-coral" />,
      color: "from-solemia-coral/20 to-transparent"
    },
    {
      title: "Pequeñas empresas",
      description: "Sistemas estandarizados que establecen procesos confiables y mantienen a tu equipo alineado.",
      icon: <Building className="w-8 h-8 text-solemia-purple" />,
      color: "from-solemia-purple/20 to-transparent"
    },
    {
      title: "Medianas empresas",
      description: "Escala tus operaciones sin fricciones con insights de IA e integraciones profundas.",
      icon: <Building2 className="w-8 h-8 text-solemia-charcoal dark:text-gray-300" />,
      color: "from-gray-500/20 to-transparent"
    },
    {
      title: "Emprendedores",
      description: "Lanza más rápido con herramientas inteligentes diseñadas para testear y validar tu crecimiento.",
      icon: <Lightbulb className="w-8 h-8 text-solemia-coral" />,
      color: "from-solemia-coral/20 to-transparent"
    },
  ];

  return (
    <section id="who-we-serve" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-solemia-purple uppercase mb-3">A quién servimos</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Hecho para cada etapa de crecimiento</h3>
          <p className="text-lg text-muted-foreground">
            Ya seas un emprendedor independiente o una mediana empresa en expansión, nuestras soluciones de IA se adaptan a tu escala y complejidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-solemia-purple/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${target.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {target.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">{target.title}</h4>
              <p className="text-muted-foreground relative z-10">{target.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
