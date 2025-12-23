import { FaDownload } from "react-icons/fa6"
import about_user from "@/assets/about_user.png"

function About(){
    return (
        <section className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-center gap-3">
            <div className="w-full md:w-1/2 pt-3 md:pt-0 flex justify-center items-center">
                <figure className="w-11/12 md:w-3/4 rounded-2xl shadow-2xs shadow-(--foreground)/60">
                    <img className="rounded-2xl" src={ about_user } alt="Image DEM" />
                </figure>
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
                <div className="w-full py-5 flex justify-center md:justify-start items-center">
                    <a 
                    href="/curriculo.pdf" 
                    target="_blank" 
                    download="Currículo_Everaldo_Martins.pdf" 
                    className="w-fit flex justify-between items-center gap-2 bg-(--foreground) text-(--background) px-8 py-3 rounded-full hover:bg-(--foreground)/80"
                    rel="noopener noreferrer"
                    >
                        <FaDownload className="text-xl" /> 
                        <span className="font-sans font-medium text-sm">Download CV</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About