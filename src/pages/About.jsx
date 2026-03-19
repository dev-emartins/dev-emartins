import { FaDownload } from "react-icons/fa6";
import { Download, Image } from "@components/ui";
import about_user from "@assets/about_user.webp";

function About(){
    return (
        <section className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-center gap-3">
            <div className="w-full lg:w-1/3 pt-3 flex justify-center items-center">                
                    <Image 
                        className="rounded-2xl" 
                        classNameFigure="w-11/12 max-w-[80%] bg-button/10 border-y border-button/60 rounded-lg"
                        src={ about_user } 
                        alt="Image DEM" 
                    />
            </div>
            <div className="w-full lg:w-2/3 p-3 flex flex-col justify-start items-start gap-3">
                <h2 className="w-full text-2xl md:text-3xl text-center lg:text-left font-black font-sans">Sobre mim</h2>
                <h4 className="w-full text-xl font-bold text-center lg:text-left">Olá! meu nome é Everaldo Martins</h4>
                
                <p className="text-base text-justify leading-relaxed">
                    Minha paixão pela programação nasceu do desejo de desvendar o funcionamento interno dos sistemas. Desde então, tenho investido no meu crescimento técnico, criando projetos e explorando novas tecnologias para entregar aplicações sólidas, organizadas e fáceis de manter.
                </p>
                <p className="text-base text-justify leading-relaxed">
                    Tenho me dedicado a aprender e usar princípios de design de APIs REST, metodologias de desenvolvimento eficazes, organização de dados e testes, empregando bancos de dados como PostgreSQL, MySQL e MongoDB, assim como ferramentas de conteinerização e tecnologias de nuvem.
                </p>
                <p className="text-base text-justify leading-relaxed">
                    Como desenvolvedor web, almejo a chance de colocar em prática e aprofundar o que aprendi criando soluções inovadoras, de alto desempenho e adaptáveis. Trabalho tanto no lado do servidor quanto na interface (full-stack), com vivência em Java, Spring Boot, Node.js, React e Next.js.
                </p>                                
                <p className="text-base text-justify leading-relaxed">
                    Penso que as melhores soluções tecnológicas unem código de qualidade, performance e usabilidade, e por isso me esforço para criar aplicações com interfaces amigáveis, estrutura coesa e com ênfase em práticas recomendadas de desenvolvimento de software.
                </p>

                <Download 
                    icon={ FaDownload }
                    to="/files/curriculo.pdf" 
                    label="Download CV"                     
                />
            </div>
        </section>
    );
}

export default About;