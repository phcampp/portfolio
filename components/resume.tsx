import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Star, Briefcase } from "lucide-react";

const highlights = [
  {
    title: "Disponibilidade",
    description: "Disponível no período da manhã e tarde, com início imediato.",
  },
  {
    title: "Interesse em Crescer",
    description:
      "Grande interesse em aprender e se desenvolver profissionalmente.",
  },
  {
    title: "Facilidade com Tecnologia",
    description:
      "Boa utilização de ferramentas digitais e inteligência artificial.",
  },
];

const education = [
  {
    degree: "Ensino Médio",
    school: "E.E Caetano de Campos",
    period: "Em andamento",
    description:
      "Cursando o ensino médio com dedicação aos estudos e bom desempenho acadêmico.",
  },
];

const experience = [
  {
    title: "Trainee Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Working on various projects to gain hands-on experience.",
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Currículo
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Resumo da minha formação e qualificações. Faça o download do meu
            currículo completo para mais detalhes.
          </p>
          <Button size="lg" className="rounded-full px-8 gap-2" asChild>
            <a href="https://blobs.vusercontent.net/blob/curr%C3%ADculo%20OFC-C9x3rZnlNN9wPqkHzg652jJaYM9CsU.pdf" download="Pedro_Henrique_Campos_Lima_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5" />
              Baixar Currículo (PDF)
            </a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Destaques
              </h3>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Formação
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <span className="text-sm text-primary font-medium">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mt-1">
                    {item.degree}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {item.school}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
