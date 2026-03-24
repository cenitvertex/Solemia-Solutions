import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src={`${import.meta.env.BASE_URL}solemia-logo.jpg`}
                alt="Logo de Solemia"
                className="h-10 object-contain rounded-sm"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Potenciamos micro, pequeñas y medianas empresas con soluciones de IA estandarizadas y escalables.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-solemia-coral transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-solemia-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-solemia-charcoal dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Soluciones</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Automatización de procesos</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Analítica con IA</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Integraciones inteligentes</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Inteligencia del cliente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Quiénes somos</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Trabaja con nosotros</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Política de cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Solemia. Todos los derechos reservados.
          </p>
          <div className="text-sm text-muted-foreground flex gap-2">
            Construido con inteligencia artificial.
          </div>
        </div>
      </div>
    </footer>
  );
}
