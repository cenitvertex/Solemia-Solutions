import { motion } from "framer-motion";
import { Layers, Maximize, BrainCircuit } from "lucide-react";

export function WhySolemia() {
  const features = [
    {
      title: "Standardized",
      description: "No endless custom development. We provide ready-to-use solutions configured for immediate impact.",
      icon: <Layers className="w-10 h-10 text-white" />,
      bg: "bg-solemia-charcoal"
    },
    {
      title: "Scalable",
      description: "Systems designed to grow with you. Handle 10 customers or 10,000 without breaking a sweat.",
      icon: <Maximize className="w-10 h-10 text-white" />,
      bg: "bg-solemia-purple"
    },
    {
      title: "Intelligent",
      description: "Built with AI at the core, not as an afterthought. Our systems learn, adapt, and improve over time.",
      icon: <BrainCircuit className="w-10 h-10 text-white" />,
      bg: "bg-solemia-coral"
    }
  ];

  return (
    <section id="why-solemia" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Why choose Solemia?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bridge the gap between enterprise-grade artificial intelligence and the practical needs of smaller businesses.
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
