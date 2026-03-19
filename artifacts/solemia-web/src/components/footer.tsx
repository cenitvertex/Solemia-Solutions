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
                alt="Solemia Logo"
                className="h-10 object-contain rounded-sm"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Empowering micro, small, and medium-sized enterprises with standardized, scalable AI solutions.
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
            <h4 className="font-bold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Process Automation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">AI Analytics</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Smart Integrations</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Customer Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-solemia-coral transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Solemia. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground flex gap-2">
            Built with AI intelligence.
          </div>
        </div>
      </div>
    </footer>
  );
}
