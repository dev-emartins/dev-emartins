import { FaDownload } from "react-icons/fa6";
import { Download, Image } from "@components/ui";
import about_user from "@assets/about_user.png";

function About(){
    return (
        <section className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-center gap-3">
            <div className="w-full md:w-1/2 pt-3 md:pt-0 flex justify-center items-center">                
                    <Image 
                        className="rounded-2xl" 
                        classNameFigure="w-11/12 md:w-1/2 bg-button/10 border-y border-button/60 rounded-lg"
                        src={ about_user } 
                        alt="Image DEM" 
                    />
            </div>
            <div className="w-full md:w-1/2 p-3 md:p-0 flex flex-col justify-start items-start gap-3">
                <h2 className="text-2xl md:text-3xl font-black font-sans">Sobre mim</h2>
                <h4 className="text-xl font-bold">Olá! Sou Everaldo Martins</h4>
                <p className="text-base text-justify leading-relaxed">
                    Sou um desenvolvedor apaixonado por tecnologia em busca da minha primeira oportunidade para adquerir experiência criando soluções web
                    modernas e eficientes. Desenvolverdor Frontend/Backend, tenho me dedicado a estudar novas técnologias como React, Next.js, Node.js, Spring Boot, Java, Bancos de Dados (Relacionais: PostgreSQL e MySQL e Não-Relacionais: MongoDB) e tecnologias cloud.
                </p>
                <p className="text-base text-justify leading-relaxed">
                    Minha jornada começou com o desejo de entender como as coisas funcionam por trás das telas. Desde então, tenho me aprofundado em
                    desenvolvimento web, buscando sempre aprender e aplicar as melhores práticas para criar aplicações robustas e escaláveis.
                </p>
                <p className="text-base text-justify leading-relaxed">
                    Acredito que a tecnologia deve ser acessível e útil para todos. Por isso, foco em criar interfaces
                    intuitivas e experiências de usuário excepcionais.
                </p>
                <Download 
                    icon={ FaDownload }
                    to="/curriculo.pdf" 
                    label="Download CV"                     
                />
            </div>
        </section>
    );
}

export default About;