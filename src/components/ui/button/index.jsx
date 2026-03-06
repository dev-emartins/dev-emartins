function Button({ icon: Icon, text: text, type: type = "button" }) {
    return (
        <button type={ type } className="w-full flex justify-center items-center gap-2 bg-button text-button-text px-8 py-3 rounded-2xl hover:bg-button/80 cursor-pointer">
            <Icon className="text-xl" /> 
            <span className="font-sans font-medium text-sm">{ text }</span>
        </button>
    );
}

export default Button;