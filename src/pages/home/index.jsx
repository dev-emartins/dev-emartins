import { FaRegCircleQuestion , FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa6";
import Typewriter from "@components/ui/typewriter";
import ButtonLink from "@components/ui/buttonlink";
import Social from "@components/common/social";
import Image from "@/components/ui/image";
import user from "@assets/user.png";

function Home(){    
    const redesSociais = [
        {
            icon: FaEnvelope,
            href: "mailto:dev.everaldomartins@gmail.com",
            label: "E-mail"
        },
        {
            icon: FaGithub,
            href: "https://github.com/dev-emartins",
            label: "GitHub"
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/everaldomartins",
            label: "LinkedIn"
        },
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/dev_emartins",
            label: "Instagram"
        }
    ];

    const aboutMe = [
        "Desenvolvedor Backend",
        "Desenvolvedor Frontend",
        "Desenvolvedor Full Stack",
        "Engenheiro de Softwares"
    ];
    return (
        <section className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center gap-3">
            <div className="w-full md:w-1/2 pt-3 md:pt-0">
                <h4 className="text-base md:text-xl font-semibold font-sans px-3 py-1">
                    Olá! Bem-vindo(a), meu nome é
                </h4>
                <h2 className="text-4xl md:text-7xl font-black font-sans p-3">
                    Everaldo Martins
                </h2>
                <h4 className="w-full md:w-xl flex justify-start items-center p-4">
                    <Typewriter 
                        texts={ aboutMe }
                        prefix="root@dem:/#"
                        cursor="█"
                        className="text-2xl"
                        prefixClassName="font-bold"
                        textClassName="font-medium"
                        cursorClassName="text-xl"
                    />
                </h4>
                <div className="w-full p-4 flex justify-center md:justify-start gap-4">
                    {redesSociais.map(item => (
                        <Social label={ item.label } icon={ item.icon } link={ item.href } />
                    ))}                          
                </div>
                <div className="w-full p-4 flex justify-center md:justify-start items-center">
                    <ButtonLink icon={ FaRegCircleQuestion } text="Saiba mais" link="/about" />
                </div>
            </div>
            <div className="w-full md:w-1/2 pt-3 md:pt-0 flex justify-center items-center">
                <figure className="w-11/12 md:w-2/3 block overflow-hidden border-b border-button/60 rounded-lg">
                    <Image 
                        className="w-full p-0 drop-shadow-xl drop-shadow-button/20" 
                        src={ user } 
                        alt="Image DEM" 
                    />
                </figure>
            </div>
        </section>
    );
}

export default Home;