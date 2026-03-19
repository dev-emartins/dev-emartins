import { ButtonLink, Card, GraphicCard } from "@/components/ui";
import { 
  FaCloud, FaGlobe, FaMobileScreen, 
  FaChartArea, FaServer, FaLaptopCode
} from "react-icons/fa6";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FaLaptopCode,
      items: [
        { name: "React (Vite)", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend",
      icon: FaServer,
      items: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 82 },
        { name: "Node.js", level: 78 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      items: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 82 },
        { name: "Kubernetes", level: 68 },
        { name: "CI/CD", level: 80 },
      ],
    },
    {
      title: "Monitoramento & Logging",
      icon: FaChartArea,
      items: [
        { name: "Prometheus", level: 75 },
        { name: "Grafana", level: 82 },
        { name: "Splunk", level: 70 },
        { name: "Logstash", level: 72 },
      ],
    },
  ];

  const tools = [
    "VS Code", "IntelliJ", "Git", "GitHub", "GitFlow",
    "Docker Compose", "Vercel", "Maven", "Gradle", "Swagger UI",
    "Jenkins", "JUnit5", "Mockito", "JaCoCo", "SonarQube",
    "Jira", "MongoDB", "MySQL", "OracleDB", "Confluence", "Linux"
  ];

  const cards = [
        {
        icon: FaGlobe,
        title: "Desenvolvimento Web",
        desc: "Aplicações modernas, performáticas e com excelente experiência do usuário"
        },
        {
        icon: FaMobileScreen,
        title: "Mobile First",
        desc: "Design responsivo, fluido e otimizado para todos os dispositivos"
        },
        {
        icon: FaCloud,
        title: "Cloud & Escalabilidade",
        desc: "Arquiteturas cloud-native, seguras e preparadas para crescer"
        },
    ];

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">
      {/* Cabeçalho */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Minhas Habilidades
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Com dedicação e experiência acumulada, domino tecnologias modernas que me permitem entregar soluções completas, 
          escaláveis e alinhadas com as reais necessidades de negócio.
        </p>
      </div>

      {/* Grid de categorias principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillCategories.map((category) => (
          <GraphicCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>

      {/* Ferramentas */}
      <div className="mt-16 md:mt-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Ferramentas & Tecnologias
        </h3>

        <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
          {tools.map((tool) => (
            <ButtonLink text={ tool } className="w-fit" />            
          ))}
        </div>
      </div>         

      {/* Cards de destaque */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cards.map((item, i) => (
          <Card
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.desc}
          />

        ))}
      </div>
    </section>
  );
}

export default Skills;