import { useState } from "react"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapLocation, FaPaperPlane } from "react-icons/fa6"
import Social from "@/components/social"
import Button from "@/components/button"
import Input from "@/components/input"
import TextArea from "@/components/textarea"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        alert("Este forma ainda não está implementada. Em breve você poderá enviar mensagens diretamente para mim!")
        // Reset form
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
        [   e.target.name]: e.target.value,
        })
    }
    
    return (
        <section className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center gap-5">
            <div className="w-full md:w-1/2 p-3 md:p-0 flex flex-col justify-center items-start gap-4">
                <h2 className="text-2xl mb-4">Informações de Contato</h2>
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="p-3 bg-(--foreground) text-(--background) rounded-full">
                            <FaEnvelope className="text-xl" />
                        </div>
                        <div className="text-sm">
                            <h3 className="font-semibold">Email</h3>
                            <p>everaldoinfortecnico@gmail.com</p>
                        </div>
                    </div>
                    {
                        /*
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-(--foreground) text-(--background) rounded-full">
                                <FaPhone className="text-xl" />
                            </div>
                            <div className="text-sm">
                                <h3 className="font-semibold">Telefone</h3>
                                <p>+55 (11) 99999-9999</p>
                            </div>
                        </div>
                        */
                    }
                    
                    <div className="flex items-center space-x-3">
                        <div className="p-3 bg-(--foreground) text-(--background) rounded-full">
                            <FaMapLocation className="text-xl" />
                        </div>
                        <div className="text-sm">
                            <h3 className="font-semibold ">Localização</h3>
                            <p >Santa Luzia, PB - Brasil</p>
                        </div>
                    </div>
                </div>

                <div className="py-4 pt-5">
                    <h2 className="text-2xl mb-4">Redes sociais</h2>
                    <div className="flex space-x-4">
                        <Social icon={ FaLinkedin } link="https://www.linkedin.com/in/everaldomartins" />
                        <Social icon={ FaInstagram } link="https://www.instagram.com/dev_emartins" />
                        <Social icon={ FaGithub } link="https://github.com/dev-emartins" />                            
                    </div>
                </div>
                
                <div className="py-3">
                    <h2 className="text-2xl mb-4">Disponível para Projetos</h2>
                    <p className="w-11/12 text-sm text-justify">
                        Estou atualmente disponível para novos projetos e oportunidades de trabalho. Vamos criar
                        algo incrível juntos!
                    </p>
                </div>                
            </div>

            <div className="w-full md:w-1/2 p-3 md:p-0 flex flex-col justify-start items-start gap-4">
                <h1 className="w-full text-2xl">
                    Entre em Contato
                </h1>

                <p className="text-sm text-justify max-w-3xl">
                    Tem um projeto em mente? Vamos conversar! Estou sempre aberto a novas oportunidades e colaborações
                    interessantes.
                </p> 
                <form onSubmit={ handleSubmit } className="w-full max-w-3xl space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input name="name" value={ formData.name } change={ handleChange } req={ true } label="Nome" />
                        </div>
                        <div className="space-y-2"> 
                            <Input name="email" value={ formData.email } type="email" change={ handleChange } req={ true } label="Email" /> 
                        </div>
                    </div>                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2"> 
                            <Input name="phone" value={ formData.phone } type="phone" change={ handleChange } label="Telefone" /> 
                        </div>
                        <div className="space-y-2">
                            <Input name="subject" value={ formData.subject } change={ handleChange } label="Assunto" />                                                
                        </div>
                    </div>
                    <div className="space-y-2">
                        <TextArea name="message" label="Mensagem" value={ formData.message } change={ handleChange } req={ true } rows={ 6 } />
                    </div>
                    <Button icon={ FaPaperPlane } type="submit" text="Enviar mensagem" />
                </form>
            </div>
        </section>
    )
}

export default Contact