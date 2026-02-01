"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para oportunidades de trabalho como Auxiliar
            Administrativo, Recepcionista ou Assistente de Escritório. Entre em
            contato comigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a
                    href="mailto:phcampp@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    phcampp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Telefone</h4>
                  <a
                    href="tel:+5511953069845"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (11) 95306-9845
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Localização</h4>
                  <p className="text-muted-foreground">
                    Rua Leopoldo Miguez, 490 - São Paulo, SP
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-4">
                Entre em contato
              </h4>
              <div className="flex gap-4">
                <a
                  href="mailto:phcampp@gmail.com"
                  className="w-12 h-12 bg-foreground text-background rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+5511953069845"
                  className="w-12 h-12 bg-foreground text-background rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Telefone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-3xl border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-muted-foreground">
                  Obrigado pelo contato. Responderei o mais breve possível.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    placeholder="Sobre o que é?"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
