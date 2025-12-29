import { isRouteErrorResponse, useRouteError } from "react-router"
import { FaChevronLeft } from "react-icons/fa6"
import figure from "@/assets/figure.png"
import ButtonLink from "@/components/buttonlink"

function ErrorPage(){
    const error = useRouteError()

    if (!isRouteErrorResponse(error)) return null

    const statusTextMap = {
        "Not Found": "Desculpe, a página não foi encontrada.",
        "Unauthorized": "Opss! Acesso não autorizado.",
        "Forbidden": "Opss! Acesso proibido.",
        "Internal Server Error": "Desculpe! Houve um erro interno no servidor.",
        "Bad Request": "Opss! Sua requisição é inválida."
    }

    const translateStatusText = (statusText) => {
        return statusTextMap[statusText] || "Ocorreu um erro inesperado."
    }

    return (
        <div className="min-h-screen flex flex-col">            
            <div className="grow flex flex-col items-center justify-center p-4 text-center">
                <img src={ figure } className="w-full max-w-48 -mb-4 z-10" alt="Error" />
                <h1 className="w-full text-9xl font-black">{ error.status }</h1>
                <p className="text-xl">{ translateStatusText(error.statusText) }</p>
                <div className="w-full max-w-7xl flex justify-center items-center py-5">
                    <ButtonLink icon={ FaChevronLeft } text="Voltar" link="/" />
                </div>
            </div>
        </div>
    )
}

export default ErrorPage