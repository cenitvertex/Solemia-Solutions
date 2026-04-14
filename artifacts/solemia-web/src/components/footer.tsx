import { Link } from "wouter";
import { Linkedin } from "lucide-react";

export function Footer() {
  const navSections = [
    {
      title: "Industrias",
      links: ["Odontología", "Spa & Belleza", "Fitness Boutique", "Clínicas Médicas", "Inmobiliarias"],
    },
    {
      title: "Empresa",
      links: ["Quiénes somos", "Cómo funciona", "Por qué Solemia", "Contacto"],
    },
    {
      title: "Legal",
      links: ["Política de privacidad", "Términos de servicio"],
    },
  ];

  return (
    <footer className="bg-white border-t pt-16 pb-8" style={{ borderColor: "rgba(195,45,75,0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <img
                src={`${import.meta.env.BASE_URL}solemia-logo.jpg`}
                alt="Logo de Solemia"
                className="h-9 object-contain rounded-sm"
              />
            </Link>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#6b6b6b" }}>
              Tecnología que funcione para tu negocio. Sistemas de IA diseñados para cada industria.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors duration-200"
              style={{ borderColor: "rgba(37,37,37,0.15)", color: "#6b6b6b" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C32D4B";
                (e.currentTarget as HTMLElement).style.color = "#C32D4B";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,37,37,0.15)";
                (e.currentTarget as HTMLElement).style.color = "#6b6b6b";
              }}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Nav columns */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-sm" style={{ color: "#252525" }}>{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#9b9b9b" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C32D4B")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9b9b9b")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(37,37,37,0.08)" }}
        >
          <p className="text-sm" style={{ color: "#9b9b9b" }}>
            &copy; {new Date().getFullYear()} Solemia. Todos los derechos reservados.
          </p>
          <p className="text-sm" style={{ color: "#9b9b9b" }}>
            Mérida, Yucatán · solemia.io
          </p>
        </div>
      </div>
    </footer>
  );
}
