interface Props {
    onChange: (value: string) => void;
    children?: string;
    inputCount: string;
    text: string;
}

function Input({onChange, children, inputCount, text}: Props) {
    return (
        <div className="flex items-center justify-center">
            <label htmlFor={inputCount + "-input"} className="mr-4">{children}</label>
            <input onChange={e => onChange(e.target.value)} id={inputCount + "-input"} type="text" value={text} placeholder={children} className="p-4 default-border rounded-3xl" />
        </div>
    )
}

export default Input;