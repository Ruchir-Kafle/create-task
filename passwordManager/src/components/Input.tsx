interface Props {
    children?: string;
    inputCount: string;
}

function Input({children, inputCount}: Props) {
    return (
        <div className="flex items-center justify-center">
            <label htmlFor={inputCount + "-input"} className="mr-4">{children}</label>
            <input id={inputCount + "-input"} type="text" placeholder={children} className="p-4 default-border rounded-3xl" />
        </div>
    )
}

export default Input;