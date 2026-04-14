import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t pt-16 pb-8" style={{ borderColor: "rgba(195,45,75,0.1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src={`${import.meta.env.BASE_URL}solemia-logo.jpg`}
                alt="Solemia"
                className="h-9 object-contain rounded-sm"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>
              Sistemas de IA para empresas. Diagnosticamos, construimos y mantenemos — para que tu negocio opere mejor.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: "#252525" }}>Empresa</h4>
            <ul className="space-y-3">
              {[
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "Por qué Solemia", href: "#por-que-solemia" },
                { label: "Diagnóstico gratis", href: "#contacto" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9b9b9b" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C32D4B")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9b9b9b")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: "#252525" }}>Contacto</h4>
            <ul className="space-y-3">
              {[
                { label: "WhatsApp", href: "https://wa.me/529991234567" },
                { label: "Correo", href: "mailto:hola@solemia.io" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9b9b9b" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C32D4B")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9b9b9b")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: "#252525" }}>Legal</h4>
            <ul className="space-y-3">
              {["Política de privacidad", "Términos de servicio"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9b9b9b" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C32D4B")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9b9b9b")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(37,37,37,0.08)" }}
        >
          <p className="text-sm" style={{ color: "#9b9b9b" }}>
            &copy; 2026 Solemia. Todos los derechos reservados.
          </p>
          <p className="text-sm" style={{ color: "#9b9b9b" }}>
            Mérida, Yucatán · solemia.io
          </p>
        </div>
      </div>
    </footer>
  );
}
