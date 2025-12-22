import { FaCloud, FaCode, FaCrop, FaDatabase, FaGlobe, FaMobileScreen, FaFeatherPointed, FaFileCode, FaTerminal, FaFilePen} from "react-icons/fa6"

function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <FaCode className="text-3xl" />,
            skills: [
                { name: "React(Vite)", icon: <FaFeatherPointed />, level: 95 },
                { name: "Vue", icon: <FaFeatherPointed />, level: 95 },
                { name: "NextJS", icon: <FaFeatherPointed />, level: 85 }, 
                { name: "HTML", icon: <FaFeatherPointed />, level: 95 },
                { name: "CSS", icon: <FaFeatherPointed />, level: 95 },
                { name: "Tailwind CSS", icon: <FaFeatherPointed />, level: 90 }
            ],
        },
        {
            title: "Backend",
            icon: <FaDatabase className="text-3xl" />,
            skills: [
                { name: "Java", icon: <FaFileCode />, level: 90 },
                { name: "Spring Boot", icon: <FaFileCode />, level: 85 },
                { name: "NodeJS", icon: <FaFileCode />, level: 80 },
                { name: "PostgreSQL", icon: <FaFileCode />, level: 80 },
                { name: "MySQL", icon: <FaFileCode />, level: 80 },
                { name: "MongoDB", icon: <FaFileCode />, level: 60 }
            ],
        },
        {
            title: "Cloud & DevOps",
            icon: <FaCloud className="text-3xl" />,
            skills: [
                { name: "AWS", icon: <FaTerminal />, level: 60 },
                { name: "Docker", icon: <FaTerminal />, level: 65 },
                { name: "Kubernetes", icon: <FaTerminal />, level: 90 },
                { name: "Git", icon: <FaTerminal />, level: 95 }
            ],
        },
        {
            title: "Design & UX",
            icon: <FaCrop className="text-3xl" />,
            skills: [                
                { name: "UI/UX Design", icon: <FaFilePen />, level: 75 },
                { name: "Responsive Design", icon: <FaFilePen />, level: 90 },
                { name: "Accessibility", icon: <FaFilePen />, level: 85 },
                { name: "Figma", icon: <FaFilePen />, level: 60 }
            ],
        },
    ]

    const tools = [
        "VS Code",
        "IntelliJ IDEA",        
        "Git",
        "GitHub",
        "GitFlow",        
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "AWS",
        "Vercel",
        "Maven",
        "Gradle",
        "Swagger UI",
        "Jenkins",
        "Postman",
        "JUnit5",
        "Mockito",
        "JaCoCo",
        "SonarQube",
        "Jira",
        "Confluence",        
        "Splunk",
        "Prometheus",
        "Grafana",
        "Postman",
        "Linux"
    ];

    return (
        <section className="w-full max-w-7xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center py-3">
                Minhas Habilidades
            </h2>

            <p className="text-sm text-center py-3">
                Com muito empenho e dedicação ao longo da minha trajetória, desenvolvi expertise em diversas tecnologias e ferramentas, o que hoje me permite criar soluções completas, eficientes e alinhadas com as reais necessidades dos projetos.
            </p>

            <div className="grid md:grid-cols-2 gap-8 py-4">
                {skillCategories.map((category, index) => (
                    <div key={ index } className="space-y-4">
                        <h2 className="flex items-center text-2xl py-3 font-semibold">
                            <span className="mr-3">{category.icon}</span>
                            { category.title }
                        </h2>
                        <div className="space-y-4">
                            {category.skills.map((skill, iskill) => (
                                <div key={ iskill } className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-thin">{ skill.icon }</span>
                                        <span className="font-medium">{ skill.name }</span>
                                    </div>
                                    <div className="w-full bg-(--foreground) rounded-full h-0.5 overflow-hidden">                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-6">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Ferramentas & Tecnologias
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                    {tools.map((tool, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-(--foreground) text-(--background) rounded-full text-sm font-medium"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 py-3">
                <div className="text-center">
                    <div className="border-2 border-(--foreground) rounded-2xl p-6 shadow">
                        <FaGlobe className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Desenvolvimento Web</h3>
                        <p className="text-sm">Aplicações web modernas e responsivas</p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="border-2 border-(--foreground) rounded-2xl p-6 shadow">
                        <FaMobileScreen className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Mobile First</h3>
                        <p className="text-sm">Design responsivo e otimizado para mobile</p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="border-2 border-(--foreground) rounded-2xl p-6 shadow">
                        <FaCloud className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
                        <p className="text-sm">Arquiteturas escaláveis na nuvem</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills