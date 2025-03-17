interface Props {
    close: boolean;
    setClose: (value: boolean) => React.Dispatch<React.SetStateAction<boolean>>;
}

function PopUp({close, setClose}: Props) {
    return (
        <div className={"w-screen h-screen absolute top-0 left-0" + (close ? " hidden" : "")}>

            <div className="w-screen h-screen opacity-75 bg-gray-700"></div>

            <div className="flex justify-end items-start h-[75%] w-[50%] p-1 absolute top-[12.5%] left-[25%] opacity-100 bg-white default-border rounded-4xl">
                <button className="w-[62.5px] h-[62.5px] bg-red-400 text-gray-700 text-3xl default-border rounded-3xl" onClick={() => setClose(true)}>X</button>
            </div>
        </div>
    )
}

export default PopUp;