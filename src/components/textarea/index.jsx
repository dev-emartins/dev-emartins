function TextArea({ name, label, value, change, req= false, rows = 4 }) {
    return (
        <>
            <label className="text-sm" htmlFor={ name }>{ label }</label>
            <textarea
                id={ name }
                name={ name }
                value={ value }
                onChange={ change }
                rows={ rows }
                required={ req }
                className="w-full flex justify-between items-center gap-2 rounded-2xl bg-transparent border-2 border-(--foreground) p-3 mt-1.5 outline-0"            
            >
            </textarea>
        </>       
    )
}

export default TextArea