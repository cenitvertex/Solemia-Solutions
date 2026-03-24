import { motion } from "framer-motion";
import { Layers, Maximize, BrainCircuit } from "lucide-react";

export function WhySolemia() {
  const features = [
    {
      title: "Estandarizado",
      description: "Sin desarrollos a medida interminables. Ofrecemos soluciones listas para usar, configuradas para generar impacto de inmediato.",
      icon: <Layers className="w-10 h-10 text-white" />,
      bg: "bg-solemia-charcoal"
    },
    {
      title: "Escalable",
      description: "Sistemas diseñados para crecer contigo. Atiende 10 clientes o 10.000 sin que nada se rompa.",
      icon: <Maximize className="w-10 h-10 text-white" />,
      bg: "bg-solemia-purple"
    },
    {
      title: "Inteligente",
      description: "Construido con IA en el núcleo, no como un añadido. Nuestros sistemas aprenden, se adaptan y mejoran con el tiempo.",
      icon: <BrainCircuit className="w-10 h-10 text-white" />,
      bg: "bg-solemia-coral"
    }
  ];

  return (
    <section id="why-solemia" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">¿Por qué elegir Solemia?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acercamos la inteligencia artificial de nivel empresarial a las necesidades concretas de los negocios más pequeños.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative p-8 rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-background border border-border rounded-3xl transition-transform duration-500 group-hover:scale-[0.98]" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-20 h-20 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
