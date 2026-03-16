import { FaChevronLeft } from "react-icons/fa6";
import figure from "@assets/figure.webp";
import { ButtonLink, Image } from "@components/ui";

function Error404(){
    return (
        <div className="min-h-screen flex flex-col">            
            <div className="grow flex flex-col items-center justify-center p-4 text-center">
                <Image 
                    src={ figure } 
                    alt="Error" 
                    className="w-full max-w-60" 
                    classNameFigure="w-11/12 max-w-3/4 -mb-5 z-10 flex justify-center"
                />
                <h1 className="w-full text-9xl font-black">404</h1>
                <p className="text-xl">Desculpe, a página não foi encontrada.</p>
                <div className="w-full max-w-7xl flex justify-center items-center py-5">
                    <ButtonLink 
                        icon={ FaChevronLeft } 
                        text="Voltar" 
                        link="/" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Error404;