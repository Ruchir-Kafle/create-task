import { ReactNode } from "react";

interface Props {
    setModalClosed: React.Dispatch<React.SetStateAction<boolean>>;
    modalClosed: boolean;
    children: ReactNode;
}

function ModalTemplate({setModalClosed, modalClosed, children}: Props) {
    return (
        <div className={"w-screen h-screen absolute top-0 left-0" + (modalClosed ? " hidden" : "")}>

            <button onClick={() => setModalClosed(true)} className="w-screen h-screen opacity-75 bg-gray-700 modal-background"></button>

            <div className="grid grid-cols-11 grid-rows-11 h-[75%] w-[50%] p-1 absolute top-[12.5%] left-[25%] opacity-100 bg-white default-border rounded-4xl">
                {children}
            </div>
        </div>
    )
}

export default ModalTemplate;