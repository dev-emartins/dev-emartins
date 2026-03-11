import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaGithub, FaPhone, FaInstagram, FaLinkedin, FaMapLocation, FaPaperPlane, FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
import { Social } from "@components/common";
import { Button, Input, TextArea, Modal } from "@components/ui";

function Contact() {        
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    }); 
    
    const [state, handleSubmit] = useForm("meerogdv");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setIsModalOpen(true);
        }
    }, [state.succeeded]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();        
        await handleSubmit(e);
    };

    const redesSociais = [
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

    return (
        <>
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center gap-5">
                
                {/* Lado esquerdo - Informações de contato */}
                <div className="w-full md:w-1/2 p-3 flex flex-col justify-center items-start gap-4">
                    <h2 className="text-2xl mb-4">Informações de Contato</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-(--foreground) text-(--background) rounded-full">
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div className="text-sm">
                                <h3 className="font-semibold">Email</h3>
                                <p>dev.everaldomartins@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-(--foreground) text-(--background) rounded-full">
                                <FaPhone className="text-xl" />
                            </div>
                            <div className="text-sm">
                                <h3 className="font-semibold">Telefone</h3>
                                <p>+55 (83) 9 9115-8460</p>
                            </div>
                        </div>
                        
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
                            {redesSociais.map((item, index) => (
                                <Social 
                                    key={index}
                                    label={item.label} 
                                    icon={item.icon} 
                                    link={item.href} 
                                />
                            ))}                            
                        </div>
                    </div>
                    
                    <div className="w-full p-3">
                        <h2 className="text-2xl mb-4">Disponível para Projetos</h2>
                        <p className="w-11/12 text-sm text-justify">
                            Estou atualmente disponível para novos projetos e oportunidades de trabalho. Vamos criar
                            algo incrível juntos!
                        </p>
                    </div>                
                </div>

                {/* Lado direito - Formulário com Formspree */}
                <div className="w-full md:w-1/2 p-3 flex flex-col justify-start items-start gap-4">
                    <h1 className="w-full text-2xl">
                        Entre em Contato
                    </h1>

                    <p className="text-sm text-justify max-w-3xl">
                        Tem um projeto em mente? Vamos conversar! Estou sempre aberto a novas oportunidades e colaborações
                        interessantes.
                    </p> 
                    
                    {/* Indicador de envio */}
                    {state.submitting && (
                        <div className="w-full p-4 bg-background border border-button rounded-lg flex items-center gap-3">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-button"></div>
                            <span className="text-foreground">Enviando mensagem...</span>
                        </div>
                    )}

                    {/* Mensagem de erro */}
                    {state.errors && (
                        <div className="w-full p-4 bg-background border border-button rounded-lg flex items-center gap-3">
                            <FaCircleExclamation className="text-foreground text-xl" />
                            <div>
                                <span className="text-foreground font-semibold">Erro ao enviar a mensagem. </span>
                                <span className="text-foreground">
                                    {state.errors?.form?.map(error => error.message).join(', ')}
                                </span>
                            </div>
                        </div>
                    )}
                    
                    <form onSubmit={onSubmit} className="w-full max-w-3xl space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Input 
                                    name="name" 
                                    value={ formData.name } 
                                    onChange={ handleChange }
                                    required={ true } 
                                    label="Nome" 
                                    disabled={ state.submitting }
                                />
                                <ValidationError 
                                    prefix="Nome" 
                                    field="name"
                                    errors={ state.errors }
                                    className="text-sm text-pulse mt-1"
                                />
                            </div>
                            <div className="space-y-2"> 
                                <Input 
                                    name="email" 
                                    value={ formData.email } 
                                    type="email" 
                                    onChange={ handleChange }
                                    required={ true } 
                                    label="Email"
                                    disabled={ state.submitting } 
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={ state.errors }
                                    className="text-sm text-pulse mt-1"
                                />
                            </div>
                        </div>                    
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2"> 
                                <Input 
                                    name="phone" 
                                    value={ formData.phone } 
                                    type="tel" 
                                    onChange={ handleChange }
                                    label="Telefone"
                                    disabled={ state.submitting } 
                                />
                                <ValidationError 
                                    prefix="Telefone" 
                                    field="phone"
                                    errors={ state.errors }
                                    className="text-sm text-pulse mt-1"
                                />
                            </div>
                            <div className="space-y-2">
                                <Input 
                                    name="subject" 
                                    value={ formData.subject } 
                                    onChange={ handleChange }
                                    label="Assunto"
                                    required={ true }
                                    disabled={ state.submitting } 
                                />
                                <ValidationError 
                                    prefix="Assunto" 
                                    field="subject"
                                    errors={ state.errors }
                                    className="text-sm text-pulse mt-1"
                                />                                                
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <TextArea 
                                name="message" 
                                label="Mensagem" 
                                value={ formData.message } 
                                onChange={ handleChange } 
                                required={ true } 
                                rows={ 6 }
                                disabled={state.submitting}
                            />
                            <ValidationError 
                                prefix="Mensagem" 
                                field="message"
                                errors={ state.errors }
                                className="text-sm text-pulse mt-1"
                            />                        
                        </div>
                        
                        <Button 
                            icon={ FaPaperPlane }
                            type="submit"
                            text={ state.submitting ? "Enviando..." : "Enviar formulário" }
                            disabled={ state.submitting }
                            className={ state.submitting ? "opacity-50 cursor-not-allowed" : "" }
                        />
                    </form> 
                </div>
            </section>

            {/* Modal de sucesso */}
            <Modal 
                isOpen={ isModalOpen }
                onClose={ handleCloseModal }
                title="Mensagem Enviada!"
                size="md"
            >
                <div className="text-center space-y-6">
                    <FaCircleCheck className="text-6xl text-foreground mx-auto" />
                    <p className="text-foreground/80 max-w-md mx-auto">
                        Obrigado pelo contato! Sua mensagem foi enviada com sucesso. 
                        Entrarei em contato o mais breve possível.
                    </p>
                    <Button 
                        onClick={ handleCloseModal }
                        text="Enviar nova mensagem"
                        icon={ FaPaperPlane }
                    />
                </div>
            </Modal>
        </>
    );
}

export default Contact;