import { motion } from "framer-motion";
import { Cpu, LineChart, Link as LinkIcon, Compass, Users, Activity } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      title: "Automatización de procesos",
      description: "Elimina la captura manual de datos y los cuellos de botella operativos con agentes inteligentes.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Analítica con IA",
      description: "Convierte datos crudos en insights accionables al instante, sin necesidad de un equipo de datos.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Integraciones inteligentes",
      description: "Conecta todas tus herramientas en un ecosistema unificado y comunicado entre sí.",
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      title: "Apoyo a la toma de decisiones",
      description: "Modelos predictivos que ayudan a los líderes a tomar decisiones estratégicas con confianza.",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "Inteligencia del cliente",
      description: "Comprende los patrones de comportamiento para personalizar el marketing y mejorar la retención.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Eficiencia operativa",
      description: "Optimiza la asignación de recursos y reduce el desperdicio operativo usando inteligencia artificial.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-solemia-purple/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-solemia-coral uppercase mb-3">Nuestras soluciones</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">Sistemas estandarizados para problemas complejos</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Capacidades de IA listas para usar, diseñadas específicamente para la realidad de las pequeñas y medianas empresas de hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group p-8 rounded-2xl bg-card border border-border/60 hover:border-solemia-coral/50 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-solemia-coral/10 to-solemia-purple/10 text-solemia-purple flex items-center justify-center mb-6 group-hover:bg-gradient-brand group-hover:text-white transition-colors duration-300">
                {solution.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{solution.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
