import { Monitor, FileText, Brain, FolderOpen } from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Informática",
    description:
      "Domínio de ferramentas de escritório, navegação e organização digital com facilidade e eficiência.",
  },
  {
    icon: FileText,
    title: "Digitação",
    description:
      "Habilidade em digitação rápida e precisa para documentos, relatórios e comunicações.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Boa utilização de ferramentas de IA para otimizar tarefas e aumentar a produtividade.",
  },
  {
    icon: FolderOpen,
    title: "Organização",
    description:
      "Organização de arquivos e documentos de forma eficiente e sistemática.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Jovem Profissional em Desenvolvimento
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sou Pedro Henrique Campos Lima, tenho 17 anos e busco minha
              primeira oportunidade profissional como Auxiliar Administrativo,
              Recepcionista ou Assistente de Escritório.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tenho grande interesse em crescer e aprender profissionalmente.
              Possuo facilidade com tecnologia, responsabilidade e
              comprometimento com minhas atividades.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Estou disponível no período da manhã e tarde, com disponibilidade
              para início imediato. Busco uma empresa onde possa contribuir e
              desenvolver minhas habilidades.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-3xl p-8">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Habilidades e Conhecimentos
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Informática",
                "Digitação",
                "Inteligência Artificial",
                "HTML Básico",
                "Organização de Arquivos",
                "Responsabilidade",
                "Comprometimento",
                "Facilidade com Tecnologia",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card text-foreground rounded-full text-sm font-medium border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {skill.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
