"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
            Disponível para contratação
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Olá, sou{" "}
          <span className="text-primary">Pedro Henrique</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          Auxiliar Administrativo, Recepcionista e Assistente de Escritório.
          Jovem profissional com interesse em crescer e aprender, facilidade com
          tecnologia e disponível para início imediato.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() => scrollToSection("contact")}
          >
            Entre em Contato
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 bg-transparent"
            onClick={() => scrollToSection("resume")}
          >
            Ver Currículo
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a
            href="mailto:phcampp@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
