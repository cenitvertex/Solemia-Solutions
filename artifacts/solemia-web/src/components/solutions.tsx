import { motion } from "framer-motion";
import { Cpu, LineChart, Link as LinkIcon, Compass, Users, Activity } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      title: "Process Automation",
      description: "Eliminate manual data entry and workflow bottlenecks with intelligent agents.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "AI Analytics",
      description: "Turn raw data into actionable insights instantly without hiring a data team.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Smart Integrations",
      description: "Connect your disparate tools into a unified, communicative ecosystem.",
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      title: "Decision Support",
      description: "Predictive modeling that helps leaders make confident strategic choices.",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "Customer Intelligence",
      description: "Understand behavior patterns to personalize marketing and boost retention.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Operational Efficiency",
      description: "Optimize resource allocation and reduce operational waste using AI.",
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
            <h2 className="text-sm font-bold tracking-widest text-solemia-coral uppercase mb-3">Our Solutions</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">Standardized systems for complex problems</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Out-of-the-box AI capabilities engineered specifically for the realities of modern SMBs.
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
