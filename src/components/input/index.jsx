function Input({ name, ph = "", type = "text", req = false, label, value, change }) {
    return (
        <>
            <label className="text-sm" htmlFor={ name }>{ label }</label>
            <input
                id={ name }
                name={ name }
                type={ type }
                value={ value }
                placeholder={ ph }
                onChange={ change }
                required = { req }
                className="w-full flex justify-between items-center gap-2 rounded-2xl bg-transparent border-2 border-(--foreground) p-3 mt-1.5 outline-0"            
            />
        </>       
    )
}

export default Input