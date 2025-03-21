import { useEffect, useRef } from "react";

interface Props {
    setRef: React.Dispatch<React.SetStateAction<React.RefObject<null>>>;
    children?: string;
    inputCount: string;
}

function Input({setRef, children, inputCount}: Props) {
    const inputRef = useRef(null);

    useEffect(() => {
        setRef(inputRef);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <label htmlFor={inputCount + "-input"} className="mr-4">{children}</label>
            <input ref={inputRef} id={inputCount + "-input"} type="text" placeholder={children} className="p-4 default-border rounded-3xl" />
        </div>
    )
}

export default Input;