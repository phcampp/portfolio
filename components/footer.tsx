import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              {currentYear} Pedro Henrique Campos Lima. Todos os direitos
              reservados.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Desenvolvido com Next.js e Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:phcampp@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+5511953069845"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Telefone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
