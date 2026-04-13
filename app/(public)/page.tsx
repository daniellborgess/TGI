import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: "Cursos abrangentes",
    description:
      "Acesse uma ampla variedade de cursos cuidadosamente selecionados e elaborados",
    icon: "🎓", // 📚
  },
  {
    title: "Aprendizagem interativa",
    description:
      "Engaje-se com conteúdo interativo, questionários e tarefas para aprimorar sua experiência de aprendizado.",
    icon: "🧩", // interatividade / participação
  },
  {
    title: "Apoio Comunitário",
    description:
      "Junte-se a uma comunidade vibrante de alunos e instrutores para colaborar e compartilhar conhecimento.",
    icon: "👥", // comunidade
  },
  {
    title: "Acompanhamento do progresso",
    description:
      "Acompanhe seu progresso e suas conquistas com análises detalhadas e um painel personalizado.",
    icon: "📊", // progresso / métricas
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">O futuro online da educação</Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Eleve sua experiencia de aprendizado
          </h1>
          <p className="max-w-175 text-muted-foreground md:text-xl">
            Descubra uma nova forma de aprender com nosso sistema de gestão de
            aprendizagem moderno e interativo. Acesse cursos de alta qualidade a
            qualquer hora e em qualquer lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/courses"
            >
              Explore os cursos
            </Link>

            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-lg mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
